const express = require('express');
const Program = require("../Models/programPost");

const programRouter = express.Router();

// Get all programs
programRouter.get('/', async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (error) {
    res.json({ error: 'Failed to fetch programs' });
  }
});

// Get a single program by ID
programRouter.get('/:id', async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }
    res.json(program);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch program' });
  }
});

// Create a new program
programRouter.post('/', async (req, res) => {
  try {
    const program = new Program(req.body);
    await program.save();
    res.json(program);
  } catch (error) {
    res.json({ error: 'Failed to create program' });
  }
});

// Update a program by ID
programRouter.put('/:id', async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!program) {
      return res.json({ error: 'Program not found' });
    }
    res.json(program);
  } catch (error) {
    res.json({ error: 'Failed to update program' });
  }
});

// Delete a program by ID
programRouter.delete('/:id', async (req, res) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);
    if (!program) {
      return res.json({ error: 'Program not found' });
    }
    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.json({ error: 'Failed to delete program' });
  }
});

module.exports = programRouter;