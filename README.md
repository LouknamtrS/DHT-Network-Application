# DHT Network Application with Microservice Architecture

How to Run:

1. Open 4 terminals in vscode and split to:
- Client (React Vite)
- Server (for Post service)
- Server (for Comment service)
- Server (for Fav service)

2. Set your environments
- Look at your IPv4Address by look at bottom-right of your screen
- Open WiFi and click "Properties" and scroll down then you'll see it!
- Copy your IPv4Address and back to vscode
- Go to Client -> package.json and "script" -> "dev" then paste your IP at --host
- Go to Client -> src -> api_request.jsx and paste your IP at host (keep "http:\\")
- Go to Server -> .env then paste your IP at host

3. Run terminal in Client side

```bash
npm run dev
```
4. Run terminal in Server (for Post service) side
  Start at path \Server\ and set up venv first
```bash
cd post_service                      
python -m pip install fastapi uvicorn
python -m pip freeze > requirements.txt
cd ..
```
  then active venv and you'll see (venv) Left side of your terminal
```bash
venv\Scripts\activate
```

5. Run terminal in Server (for Comment service) side
  Start at path \Server\ and set up first
```bash
cd comment_service                      
python -m pip install fastapi uvicorn
python -m pip freeze > requirements.txt
cd ..
```
  then active venv and you'll see (venv) Left side of your terminal
```bash
venv\Scripts\activate
```

6. Run terminal in Server (for Fav service) side
  Start at path \Server\ and set up first
```bash
cd fav_service                      
python -m pip install fastapi uvicorn
python -m pip freeze > requirements.txt
cd ..
```
  then active venv and you'll see (venv) Left side of your terminal
```bash
venv\Scripts\activate
```

7. You can run each Server Side by:
   for Post service
```bash
python fav_service\app.py
```
   for Comment service
```bash
python fav_service\app.py
```
   for Fav service
```bash
python fav_service\app.py
```

8. Enjoy~!
