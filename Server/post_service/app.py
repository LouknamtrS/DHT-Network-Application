from fastapi import FastAPI # type: ignore

app = FastAPI()

# In-memory storage for posts
posts = {}

@app.post("/posts/")
def create_post(post_id: str, content: str):
    posts[post_id] = {"id": post_id, "content": content}
    return {"message": "Post created", "post": posts[post_id]}

@app.get("/posts/{post_id}")
def get_post(post_id: str):
    if post_id in posts:
        return posts[post_id]
    return {"error": "Post not found"}

if __name__ == "__main__":
    import uvicorn # type: ignore
    uvicorn.run(app, host="192.168.1.199", port=3000)
