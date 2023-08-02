const express = require("express");
const router = express.Router();
const Blog = require("../Models/blogPost");

const Name = (text) => {
    var words = text.split("-");
    var author = words.join(" ");
    return author;
}

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

{/** Blogs based on a category */ }
router.get("/:category", async (req, res) => {
    try {
        const category = Name(req.params.category)
        const filteredPosts = await Blog.find({ category: category })
            .sort({ date: -1 })
        res.json(filteredPosts);
    } catch (error) {
        res.json({ message: "Error retrieving filtered blog posts" });
    }
}
)

{/** Blogs based on a author */ }

router.get("/author/:author", async (req, res) => {
    try {
        const author = req.params.author;
        const authorName = Name(author);
        const filteredPosts = await Blog.find({ author: authorName })
            .sort({ date: -1 })
        res.json(filteredPosts);
    } catch (error) {
        res.json({ message: "Error retrieving filtered blog posts" });
    }
}
)

router.get("/program/programs", async (req, res) => {
    try {
        const filteredPosts = await Blog.find({ category:"Program" })
            .sort({ date: -1 })
        res.json(filteredPosts);
    } catch (error) {
        res.json({ message: "Error retrieving filtered blog posts" });
    }
})

module.exports = router;