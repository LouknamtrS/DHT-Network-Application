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
