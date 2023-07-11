const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    introduction: {
      type: String,
      required: true
    },
    blogImage: {
      type: String,
      required: true
    },
    sections: [
      {
        title: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
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
    },
    authorImage: {
      type: String,
      required: true,
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
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    linkedin: {
      type: String,
    }
  }
)

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;