const express = require('express');
const router = express.Router();
const data = require("../data");
const schoolData = data.education;

router.get("/highschool", (req, res) => {
    schoolData.getSchool("highschool").then((school) => {
        res.json(school);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});
    
router.get("/undergrad", (req, res) => {
    schoolData.getSchool("undergrad").then((school) => {
        res.json(school);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/", (req, res) => {
    schoolData.getAllSchools().then((schoolList) => {
        res.json(schoolist);
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