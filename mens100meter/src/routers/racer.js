const express = require('express');
const router = express.Router();
const Racers = require("../models/racers")




router.post("/racers", async (req, res) => {
    try {
        const createRacer = await new Racers(req.body);
        // console.log(req.body);
        const result = await createRacer.save();
        res.send(result);
    } catch (error) {
        res.send(error);
    }

});
router.get("/racers", async (req, res) => {
    try {

        const getRacerData = await Racers.find({});
        const result = await res.send(getRacerData);
        // res.status(201).send(result);
    } catch (error) {
        res.send(error);
    }

});

router.get("/racers/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getDatas = await Racers.findById(_id);
        const result = await res.send(getDatas);
    } catch (error) {
        res.send(error);
    }

});

router.patch("/racers/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateindividualData = await Racers.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        const result = await res.send(updateindividualData);
    } catch (error) {
        console.log(error);
    }

});

router.delete("/racers/:id", async (req, res) => {
    try {

        const deleteData = await Racers.findByIdAndDelete(req.params.id);
        console.log(deleteData);
        const result = await res.send(deleteData);
    } catch (error) {
        console.log(error);
    }
})






module.exports = router;
