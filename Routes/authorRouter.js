const express = require("express");
const router = express.Router();
const Author = require("../Models/authorPost");

const authorName = (author) => {
    var words = author.split("-");
    var author = words.join(" ");
    return author;
}

// GET operation - Retrieve all authors
router.get('/', async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve authors' });
    }
});

// GET operation - Retrieve an author by ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let name = authorName(id);
        const author = await Author.find({name:name});

        if (author) {
            res.json(author);
        } else {
            res.status(404).json({ error: 'Author not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve author' });
    }
});

// POST operation - Create new author
router.post('/', async (req, res) => {
    try {
        const newAuthor = req.body;
        const createdAuthor = await Author.create(newAuthor);
        res.json(createdAuthor);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create author' });
    }
});

// PUT operation - Update an author by ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedAuthor = req.body;

        const updatedResult = await Author.findByIdAndUpdate(id, updatedAuthor, { new: true });
        res.json(updatedResult);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update author' });
    }
});

// DELETE operation - Delete an author by ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedAuthor = await Author.findByIdAndRemove(id);
        res.json(deletedAuthor);
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete author' });
    }
});

module.exports = router;