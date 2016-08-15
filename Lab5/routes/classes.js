const express = require('express');
const router = express.Router();
const data = require("../data");
const classData = data.classes;

router.get("/details?code={courseCode}", (req, res) => {
    classData.getClassByCode(req.params.courseCode).then((class1) => {
        res.json(class1);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/", (req, res) => {
    classData.getAllClasses().then((classList) => {
        res.json(classList);
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