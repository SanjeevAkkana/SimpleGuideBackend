const mongoose = require("mongoose");

const subscribeSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model("Subsribe",subscribeSchema);