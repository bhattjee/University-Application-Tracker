# 🎓 UniTrack — University Application Dashboard

A full-stack application dashboard to track your Germany & Austria university applications.

---

## 🛠 Tech Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | HTML, CSS, Vanilla JS   |
| Backend  | Node.js + Express.js    |
| Database | MongoDB (local)         |
| ODM      | Mongoose                |

---

## 📦 Prerequisites

Make sure you have installed:

1. **Node.js** (v16 or higher) — https://nodejs.org
2. **MongoDB Community Server** — https://www.mongodb.com/try/download/community

---

## 🚀 Step-by-Step Setup Guide

### Step 1 — Start MongoDB

**On macOS** (with Homebrew):
```bash
brew services start mongodb-community
```

**On Windows:**
```bash
# Open Services → Start "MongoDB"
# OR run manually:
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
```

**On Linux (Ubuntu/Debian):**
```bash
sudo systemctl start mongod
```

**Verify MongoDB is running:**
```bash
mongosh
# You should see a MongoDB shell prompt
```

---

### Step 2 — Install Dependencies

Navigate to the project folder and install packages:

```bash
cd uni-tracker
npm install
```

This installs:
- `express` — web server
- `mongoose` — MongoDB ODM
- `cors` — cross-origin support
- `nodemon` — auto-restart during dev (optional)

---

### Step 3 — Start the Server

```bash
# Production mode
npm start

# Development mode (auto-restarts on file changes)
npm run dev
```

You should see:
```
✅ Connected to MongoDB at mongodb://localhost:27017/uni_tracker
🚀 Server running at http://localhost:3001
📊 Dashboard: http://localhost:3001
```

---

### Step 4 — Open the Dashboard

Open your browser and go to:
```
http://localhost:3001
```

The dashboard will load and show "MongoDB Connected" in the top-right corner.

---

## 📁 Project Structure

```
uni-tracker/
├── public/
│   └── index.html        ← Frontend dashboard (all-in-one)
├── models/
│   └── Application.js    ← MongoDB schema/model
├── server.js             ← Express API server
├── package.json
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint                          | Description              |
|--------|-----------------------------------|--------------------------|
| GET    | /api/applications                 | Fetch all applications   |
| GET    | /api/applications/country/:name   | Filter by country        |
| POST   | /api/applications                 | Create new application   |
| PUT    | /api/applications/:id             | Update application       |
| PUT    | /api/applications/reorder/bulk    | Save drag-drop order     |
| DELETE | /api/applications/:id             | Delete application       |

---

## ⚙️ Configuration

### Change MongoDB URI

Edit `server.js` line 8:
```js
const MONGODB_URI = 'mongodb://localhost:27017/uni_tracker';
```

Or set an environment variable:
```bash
MONGODB_URI=mongodb://localhost:27017/mydb npm start
```

### Change Port

Default is `3001`. To change:
```bash
PORT=4000 npm start
```

---

## 🎯 Dashboard Features

| Feature              | How to Use                                      |
|----------------------|-------------------------------------------------|
| Add Application      | Click **+ Add Entry** or the **＋ FAB** button  |
| Edit Cell Inline     | Click any cell in the table to edit directly    |
| Full Edit            | Click the ✏ icon in the Actions column          |
| Delete               | Click the 🗑 icon — confirmation dialog appears |
| Drag to Reorder      | Grab the ⠿ handle on the left of any row        |
| Filter by Status     | Use the status filter buttons at the top        |
| Filter by Uni-Assist | Use the Uni-Assist filter buttons               |
| Sort                 | Use the Sort dropdown                           |
| Save All             | Click **💾 Save All** — changes auto-save       |

---

## 💡 Notes

- **Auto-save**: Every inline cell edit is saved to MongoDB immediately on blur/Enter.
- **Fee Logic**: Uni-Assist applications default to €30 fee; Direct = Free.
- **Drag & Drop**: Rows can be reordered within their country section.
- **Keyboard**: Press `Ctrl/Cmd+N` to open Add modal. `Escape` to close.
- **Deadline Colors**: Red = expired, Yellow = within 14 days.

---

## 🔧 Troubleshooting

| Problem                        | Solution                                              |
|--------------------------------|-------------------------------------------------------|
| "Cannot connect to backend"    | Make sure `npm start` is running in the project folder |
| MongoDB connection error       | Verify MongoDB service is running (`mongosh` to test) |
| Port 3001 in use               | Run `PORT=3002 npm start`                             |
| npm install fails              | Try `npm install --legacy-peer-deps`                  |
| Data not persisting            | Check MongoDB is running and not in memory mode        |