from fastapi import FastAPI # type: ignore

app = FastAPI()

# In-memory storage for comments
comments = {}

@app.post("/comments/{post_id}")
def add_comment(post_id: str, comment: str):
    if post_id not in comments:
        comments[post_id] = []
    comments[post_id].append(comment)
    return {"message": "Comment added", "comments": comments[post_id]}

@app.get("/comments/{post_id}")
def get_comments(post_id: str):
    return {"comments": comments.get(post_id, [])}

if __name__ == "__main__":
    import uvicorn # type: ignore
    uvicorn.run(app, host="192.168.1.199", port=3001)
