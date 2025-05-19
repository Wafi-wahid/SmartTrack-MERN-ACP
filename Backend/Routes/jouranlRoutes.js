const express = require('express');
const router = express.Router();
const Journal = require('../Models/journal');

// CREATE
router.post('/', async (req, res) => {
  try {
    const newJournal = new Journal(req.body);
    const saved = await newJournal.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const entries = await Journal.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ SINGLE
router.get('/:id', async (req, res) => {
  try {
    const entry = await Journal.findById(req.params.id);
    res.json(entry);
  } catch (err) {
    res.status(404).json({ error: 'Not Found' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
