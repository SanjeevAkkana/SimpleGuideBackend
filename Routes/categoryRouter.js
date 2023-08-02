const express = require('express')
const router = express.Router();
const Category = require("../Models/categoryPost");

const categoryName = (category) => {
    var words = category.split("-");
    var categoryName = words.join(" ");
    return categoryName;
}

// GET all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.json({ error: 'Failed to fetch categories' });
    }
});

// GET a specific category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.find({categoryName:categoryName(req.params.id)});
        res.json(category);
    } catch (error) {
        resjson({ error: 'Failed to fetch category' });
    }
});

// CREATE a new category
router.post('/', async (req, res) => {
    const category = new Category(req.body);
    try {
      const savedCategory = await category.save();
      res.json(savedCategory);
    } catch (error) {
      res.json({ error: 'Failed to create category' });
    }
  });  

// UPDATE a category by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedCategory);
    } catch (error) {
        res.json({ error: 'Failed to update category' });
    }
});

// DELETE a category by ID
router.delete('/:id', async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Category deleted successfully' });
    } catch (error) {
        res.json({ error: 'Failed to delete category' });
    }
});

module.exports = router