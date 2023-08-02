const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    authorImage:{
        type:String,
        required:true
    },
    instagramUrl:{
        type:String,
    },
    facebookUrl:{
        type:String,
    },
    linkedinUrl:{
        type:String,
    },
    aboutAuthor:{
        type:String,
        required:true
    },
    slogon:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    }
})

const AuthorPost = mongoose.model('AuthorPost',AuthorSchema);

module.exports = AuthorPost;