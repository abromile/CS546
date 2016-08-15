'use strict';
const express = require('express');
const router = express.Router();
const data = require("../data");
const ash = require("../config/util");

// Single Person Page
router.get("/:id", (req, res) => {
    // Find a person by the provided id, 
    // then display their information
    // As well as listing all events that they will be attending
    // Each of these events need to link to the event page, and show the event name
    // If a person is not found, display the 404 error page
    
    
    data.people.getPerson(req.params.id).then((person) => {
        if(ash.debug) {
            res.render(`misc${ash.sep}debug`, { person: person });
        } else {
            res.render(`layouts${ash.sep}people${ash.sep}single`, { person: person });
        }
    }, (error) => {
        res.status(404).render(`misc${ash.sep}404`);
    });
});

// People Index Page
router.get("/", (req, res) => {
    // Display a list of all people; it can be in an unordered list, or a table
    // Each of these people need to link to the single person page
    debugger;
    data.people.getAllPeople().then((allPeople) => {
        if(ash.debug) {
            res.render(`misc${ash.sep}debug`, { people: allPeople });
        } else {
            res.render(`layouts${ash.sep}people${ash.sep}all`, { people: allPeople });
        }
    }, (error) => {
        res.status(404).render(`misc${ash.sep}404`);
    });
});

module.exports = router;
