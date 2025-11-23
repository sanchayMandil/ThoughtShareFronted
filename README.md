# 🖊️ **ThoughtShare — Collaborative Whiteboard**

A real-time collaborative whiteboard built using **Node.js**, **Socket.io**, **React**, and **Vite**. Multiple users can draw on the same board, communicate through integrated voice chat, and access saved boards anytime.

---

## 🔗 **Live Demo**

🚀 **Frontend (Vercel):**
[https://thought-share-fronted.vercel.app/](https://thought-share-fronted.vercel.app/)

⚙️ **Backend (Render):**
`<your-backend-url-here>`
(Replace this once you deploy the backend)

---

## 🚀 Features

### **🎨 Real-Time Drawing**

* Multiple users draw simultaneously
* Smooth stroke synchronization
* Low-latency Socket.io updates

### **🗂️ Multiple Boards**

* Create new boards
* Load existing boards
* Unique board IDs
* Persistent MongoDB storage

### **🎤 Voice Chat (WebRTC)**

* Real-time audio communication
* Peer-to-peer streaming
* Auto-reconnect

### **📝 Discussion Notes**

* Structured note panel
* Auto-synced with board

### **📌 Host Controls**

* Host layer + user layer
* Host approves/merges content
* Safe, moderated collaboration

### **🔄 Undo / Redo**

* Client-side stroke history
* Synced with socket events

### **🔒 Authentication (Optional)**

* Basic login
* Board ownership

---

## 🛠️ Tech Stack

### **Frontend**

* React + Vite
* TailwindCSS
* Socket.io-Client
* Canvas API / Fabric.js

### **Backend**

* Node.js
* Express
* Socket.io
* MongoDB + Mongoose

### **Other Tools**

* WebRTC
* UUID

---

## 📦 Installation

### **1. Clone Repo**

```bash
git clone https://github.com/yourusername/thoughtshare.git
cd thoughtshare
```

### **2. Install Frontend**

```bash
cd client
npm install
npm run dev
```

### **3. Install Backend**

```bash
cd server
npm install
npm start
```

---

## 🔧 Environment Variables (Backend)

Create `.env`:

```
MONGO_URL=your_mongo_connection_string
PORT=your_port
JWT_SECRET=your_secret
```

---

## 🧩 Socket.io Events

### **Client → Server**

* `draw`
* `clear-board`
* `voice-offer`
* `voice-answer`
* `candidate`

### **Server → Client**

* `drawing-data`
* `board-update`
* `voice-signal`
* `user-joined`
* `user-left`

---

## 🌐 Deployment

### **Frontend → Vercel**

The frontend is deployed at:

▶ **[https://thought-share-fronted.vercel.app/](https://thought-share-fronted.vercel.app/)**

Setup for Vite client-side routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### **Backend → Render**

Your backend must:

* Use Express + Socket.io
* Use `http.createServer()`
* Listen on `process.env.PORT`

```js
const server = http.createServer(app);
server.listen(process.env.PORT);
```

Once deployed, update your frontend config:

```js
const socket = io("https://your-backend-url.onrender.com");
```

---

## 📸 Screenshots

```
/screenshots
  home.png
  board.png
  voice.png
```

---

## 🧪 Roadmap

* Text tool
* Shapes (line, rectangle, circle)
* Image upload
* Screen share
* Real-time cursor
* Board history playback

---
