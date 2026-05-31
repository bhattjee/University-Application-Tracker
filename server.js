const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Application = require('./models/Application');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/uni_tracker';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB at', MONGODB_URI))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ─── ROUTES ──────────────────────────────────────────────────────────────────

// GET all applications
app.get('/api/applications', async (req, res) => {
  try {
    const apps = await Application.find().sort({ country: 1, order: 1, createdAt: 1 });
    res.json({ success: true, data: apps });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET applications by country
app.get('/api/applications/country/:country', async (req, res) => {
  try {
    const apps = await Application.find({ country: req.params.country }).sort({ order: 1 });
    res.json({ success: true, data: apps });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create new application
app.post('/api/applications', async (req, res) => {
  try {
    const count = await Application.countDocuments({ country: req.body.country });
    const app = new Application({ ...req.body, order: count });
    const saved = await app.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update application
app.put('/api/applications/:id', async (req, res) => {
  try {
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT bulk update order (for drag & drop)
app.put('/api/applications/reorder/bulk', async (req, res) => {
  try {
    const { orders } = req.body; // [{ id, order }]
    const ops = orders.map(({ id, order }) =>
      Application.findByIdAndUpdate(id, { order })
    );
    await Promise.all(ops);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE application
app.delete('/api/applications/:id', async (req, res) => {
  try {
    const deleted = await Application.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
});