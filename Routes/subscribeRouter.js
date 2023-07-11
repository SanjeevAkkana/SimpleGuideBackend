const express = require("express");
const router = express.Router();
const Subscribe = require("../Models/emailPost");

//Subscribe for blog
router.post("/", async (req, res) => {
    const { email } = req.body;

    try {
        const existingEmail = await Subscribe.findOne({
            email: { $regex: new RegExp('^' + email.trim() + '$', 'i') },
        });

        if (existingEmail) {
            return res.json({ msg: 'Email already exists' });
        }

        const newEmail = new Subscribe({ email });
        await newEmail.save();

        return res.json({ msg: 'Email added successfully' });
    } catch (err) {
        console.error(err);
        return res.json({ msg: 'Server error' });
    }
});

//Get all Subscribers
router.get("/",async(req,res)=>{
    try{
        const users = await Subscribe.find();
        res.json(users);
    }catch(error){
        res.json({ error: 'Failed to fetch Subscribers' });
    }
})

module.exports = router;