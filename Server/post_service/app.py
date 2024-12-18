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

# In-memory storage for posts
posts = {}

def hash_data(data: str) -> str:
    return hashlib.sha256(data.encode()).hexdigest()

@app.post("/posts")
async def create_post(req: Request):
    try: 
        body = await req.json()
        question = body.get("question")
        content = body.get("content")
        username = body.get("username")
        date = body.get("date")
        month = body.get("month")
        year = body.get("year")

        PH_content = content
        if len(PH_content) > 15:
            PH_content = PH_content[:15]
        PreHash = PH_content + username + str(date) + str(month) + str(year)
        new_id = hash_data(PreHash)

        new_post = {"id": new_id, "question": question, "content": content, "username": username, "date": date, "month": month, "year": year, "n_fav": 0, "n_comment": 0}
        posts[new_id] = new_post
        result = {"message": "Post created", "data": new_post}
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing post: {str(e)}")
    


@app.get("/posts")
def get_post():
    if posts == {}:
        return {"message": "Post fetched", "data": 0}
    
    result = {"message": "Post fetched", "data": posts}
    return result


if __name__ == "__main__":
    import uvicorn # type: ignore
    uvicorn.run(app, host=HOST, port=3001)
