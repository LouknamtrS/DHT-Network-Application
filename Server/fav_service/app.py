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
favs = {}

def hash_data(data: str) -> str:
    return hashlib.sha256(data.encode()).hexdigest()

@app.post("/favs")
async def fav(req: Request):
    try: 
        body = await req.json()
        username = body.get("username")
        post_id = body.get("post_id")

        find_fav = {key: value for key, value in favs.items() if value.get("post_id") == post_id}
        
        # first fav
        if len(find_fav) == 0: 
            PreHash = username + str(post_id)
            new_id = hash_data(PreHash)

            new_post = {"id": new_id, "post_id": post_id, "username": username, "n_fav": 1}

            favs[new_id] = new_post
            result = {"message": "Fav created", "data": new_post}
            return result
        else:
            for value in favs.values():
                if value.get("post_id") == post_id:
                    value["n_fav"] += 1
            find_fav = next((value for key, value in favs.items() if value.get("post_id") == post_id), None)
            result = {"message": "Fav created", "data": find_fav}
            return result
            
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing fav: {str(e)}")
    

@app.get("/favs")
def get_fav():
    if len(favs) == 0:
        return {"message": "Fav fetched", "data": 0}
    
    result = {"message": "Fav fetched", "data": favs}
    return result


if __name__ == "__main__":
    import uvicorn # type: ignore
    uvicorn.run(app, host=HOST, port=3003)
