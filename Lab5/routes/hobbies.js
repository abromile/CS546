const express = require('express');
const router = express.Router();
const data = require("../data");
const hobbyData = data.hobbies;

router.get("/:name", (req, res) => {
    hobbyData.getSchool(req.param.name).then((hobby) => {
        res.json(hobby);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/", (req, res) => {
    hobbyData.getAllHobbies().then((hobbyList) => {
        res.json(hobbyList);
    }, () => {
        // Something went wrong with the server!
        res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
    // Not implemented
    res.sendStatus(501);
});

module.exports = router;