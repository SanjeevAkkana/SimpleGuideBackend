const express = require("express");
const router = express.Router();
const Blog = require("../Models/blogPost");

{/** 5 Top blogs */ }
router.get('/recent', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ date: -1 }).limit(5);
        res.json(blogs);
    } catch (error) {
        res.json({ error: 'Failed to retrieve recent blogs' });
    }
});

{/** 3 Top blogs based on cateogory */ }
router.get("/category-top-3-blogs", async (req, res) => {
    try {
        const category = req.query.category.replace(/-/g, ' ');
        const limit = parseInt(req.query.limit);

        const filteredPosts = await Blog.find({ category })
            .sort({ date: -1 })
            .limit(limit);
        res.json(filteredPosts);
    } catch (error) {
        res.json({ message: "Error retrieving filtered blog posts" });
    }
});

{/** Blogs based on a category */}
router.get("/category",async (req,res) => {
    try {
        const category = req.query.category.replace(/-/g, ' ');
        const filteredPosts = await Blog.find({ category })
            .sort({ date: -1 })
        res.json(filteredPosts);
    } catch (error) {
        res.json({ message: "Error retrieving filtered blog posts" });
    }
})


module.exports = router;