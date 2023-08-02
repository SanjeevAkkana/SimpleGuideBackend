const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    introduction: [
      {
        content: [{
            type: String,
            required: true,
        }],
      },
    ],
    blogImage: {
      type: String,
      required: true
    },
    sections: [
      {
        contentType: {
          type: String,
        },
        title: {
          type: String,
          required: true,
        },
        content: [{
            type: String,
            required: true,
        }],
        link: {
          type: String,
        },
        image: {
          type: String,
        },
      },
    ],
    category: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: String,
      required: true,
      default: "Simple Guide"
    },
    authorImage: {
      type: String,
      required: true,
      default: "https://i.pinimg.com/564x/fe/4f/61/fe4f610344c0da3e261f76fe0ae1cdd6.jpg"
    },
    questions: [
      {
        question: {
          type: String
        },
        answer: {
          type: String
        }
      }
    ],
    youtubeVideo: {
      type: String
    }
  }
)

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;