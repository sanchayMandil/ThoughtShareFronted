# 🖊️ **ThoughtShare — Collaborative Whiteboard**

A real-time collaborative whiteboard built using **Node.js**, **Socket.io**, **React**, and **Vite**. Multiple users can draw on the same board, communicate through integrated voice chat, and access saved boards anytime.

---

## 🚀 Features

### **🎨 Real-Time Drawing**

* Multiple users draw simultaneously
* Smooth stroke synchronization
* Low-latency Socket.io updates

### **🗂️ Multiple Boards**

* Create new boards
* Load existing boards
* Each board has a unique ID
* Persistent storage (MongoDB)

### **🎤 Voice Chat (WebRTC)**

* Real-time audio communication
* Peer-to-peer connections
* Auto-reconnect support

### **📝 Discussion Notes**

* Dedicated panel for structured notes
* Automatic syncing with the board

### **📌 Host Controls**

* Host layer & user layer separation
* Host approves or rejects user contributions
* Controlled, moderated collaboration

### **🔄 Undo / Redo**

* Client-side stroke tracking
* Server-synced updates

### **🔒 Authentication (Optional)**

* Basic user login system
* Board ownership & permissions

---

## 🛠️ Tech Stack

### **Frontend**

* React + Vite
* Socket.io-client
* TailwindCSS
* Canvas API / Fabric.js (if used)

### **Backend**

* Node.js
* Express
* Socket.io
* MongoDB / Mongoose

### **Other Tools**

* WebRTC for voice chat
* UUID for board IDs

---

## 📦 Installation

### **1. Clone the Repo**

```bash
git clone https://github.com/yourusername/thoughtshare.git
cd thoughtshare
```

### **2. Install Frontend Dependencies**

```bash
cd client
npm install
npm run dev
```

### **3. Install Backend Dependencies**

```bash
cd server
npm install
npm start
```

---

## 🔧 Environment Variables

Create a `.env` inside the backend folder:

```
MONGO_URL=your_mongo_connection_string
PORT=your_port
JWT_SECRET=your_secret
```

---

## 🧩 Socket.io Events

### **Client → Server**

* `draw` – send drawing data
* `clear-board` – clear board
* `voice-offer` – WebRTC offer
* `voice-answer` – WebRTC answer
* `candidate` – ICE candidates

### **Server → Client**

* `drawing-data` – broadcast strokes
* `board-update` – merged content
* `voice-signal` – WebRTC signaling
* `user-joined`
* `user-left`

---

## 🌐 Deployment

### **Frontend**

* Vercel (Vite-friendly)
* Use `vercel.json` for routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### **Backend**

* Deploy on Render / Railway
* Must use:

```js
const server = http.createServer(app);
server.listen(process.env.PORT);
```

### **Frontend Config**

Update your API URL:

```js
const socket = io("https://your-backend-url.onrender.com");
```

---

## 📸 Screenshots (Add Yours)

```
/screenshots
  home.png
  board.png
  voice.png
```

---

## 🧪 Roadmap

* Add text tool
* Add shapes (line, rectangle, circle)
* Add image upload
* Add screen share
* Add real-time cursor positions
* Add board history playback

---

## 🙌 Contributing

Feel free to open issues, suggest improvements, or send PRs.

---

## 📄 License

MIT License

---

If you want this README customized with **your project name, screenshots, live URLs, backend link, or logo**, tell me and I’ll update it.
