const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    registrationLink: {
        type: String,
        required: true,
    },
    registrationPrice:{
        type:String,
        required:true
    },
    winPrice:{
        type:String,
        required:true
    },
    contactEmail: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    organizer: {
        type: String,
        required: true,
    },
    completed: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;