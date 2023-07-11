const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const blogRouter = require("./Routes/blogRouter")
const categoryRouter = require("./Routes/categoryRouter");
const subscribeRouter = require("./Routes/subscribeRouter");
const blogFilterRouter = require("./Routes/blogFilterRouter")
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000;
const DatabaseUrl = process.env.MONGODB_URL;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/blog", blogRouter);
app.use("/category", categoryRouter);
app.use("/subscribe", subscribeRouter);
app.use("/blogs",blogFilterRouter);


mongoose.connect(DatabaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("error", err => {
    console.log("err", err)
})

mongoose.connection.on("connected", (err, res) => {
    app.listen(PORT, () => {
        console.log(`API is listening on port ${PORT}`);
    });
})