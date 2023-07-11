const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryDescription: {
        type: String,
        required: true
    },
    categorySlogan:{
        type: String,
        required: true
    },
    categoryImage: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Category', categorySchema);