from fastapi import FastAPI, HTTPException, Request # type: ignore
from fastapi.responses import JSONResponse # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from dotenv import load_dotenv # type: ignore
import os
import hashlib

load_dotenv()
HOST = os.getenv("HOST")
client = "http://" + HOST + ":5173"
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[client],  # Allow React app URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow any HTTP method (GET, POST, etc.)
    allow_headers=["*"],  # Allow any headers
)

# In-memory storage for comments
comments = {}

def hash_data(data: str) -> str:
    return hashlib.sha256(data.encode()).hexdigest()

@app.post("/comments")
async def add_comment(req: Request):
    try: 
        body = await req.json()
        username = body.get("username")
        comment = body.get("comment")
        date = body.get("date")
        month = body.get("month")
        year = body.get("year")
        post_id = body.get("post_id")
        
        PH_comment = comment
        if len(PH_comment) > 15:
            PH_comment = PH_comment[:15]
        PreHash = PH_comment + username + str(date) + str(month) + str(year)
        new_id = hash_data(PreHash)

        new_comment = {"id": new_id, "username": username, "comment": comment, "date": date, "month": month, "year": year, "post_id": post_id}
        comments[new_id] = new_comment
        result = {"message": "Comment added", "data": new_comment}
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing comment: {str(e)}")

@app.get("/comments")
def get_comments(req: Request):
    if comments == {}:
        return {"message": "Comment fetched", "data": 0}
    
    result = {"message": "Comment fetched", "data": comments}
    return result

if __name__ == "__main__":
    import uvicorn # type: ignore
    uvicorn.run(app, host=HOST, port=3002)