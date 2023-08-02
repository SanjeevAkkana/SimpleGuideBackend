const express = require("express");
const router = express.Router();
const Blog = require("../Models/blogPost");

const Name = (text) => {
    var words = text.split("-");
    var author = words.join(" ");
    return author;
}

//GET all blog posts
router.get("/", async (req, res) => {
    try {
        const blogPosts = await Blog.find();
        res.json(blogPosts);
    } catch (error) {
        res.json({ error: 'Failed to fetch blog posts' });
    }
})

// GET a specific blog post by ID
router.get('/:id', async (req, res) => {
    const blog = req.params.id;
    const authorName = Name(blog);
    try {
        const blogPost = await Blog.find({ title: authorName });
        res.json(blogPost[0]);
    } catch (error) {
        res.json({ error: 'Failed to fetch blog post' });
    }
});
// CREATE a new blog post
router.post('/', async (req, res) => {
    const blogPost = new Blog(req.body);
    try {
        let data = await blogPost.save();
        res.json(data);
    } catch (error) {
        res.json({ error: 'Failed to create blog post' });
    }
});

// UPDATE a blog post by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedBlogPost = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedBlogPost);
    } catch (error) {
        res.json({ error: 'Failed to update blog post' });
    }
});

// DELETE a blog post by ID
router.delete('/:id', async (req, res) => {
    try {
        await Blog.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Blog post deleted successfully' });
    } catch (error) {
        res.json({ error: 'Failed to delete blog post' });
    }
});

module.exports = router;