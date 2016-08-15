'use strict';
const express = require('express');
const router = express.Router();
const data = require("../data");
const ash = require("../config/util");

// Single Event Page
router.get("/:id", (req, res) => {
    // Find a event by the provided id, 
    // then display its information
    // As well as listing the names of all the attendees that will be at this event 
    // Each of these attendee names will need to link to their person page
    // You will also list the location of the event, said location's name, and a link to the location page
    // If a event is not found, display the 404 error page
    
    data.events.getEvent(req.params.id).then((event) => {
        if(ash.debug) {
            res.render(`misc${ash.sep}debug`, { event: event });
        } else {
            res.render(`layouts${ash.sep}events${ash.sep}single`, { event: event });
        }
    }, (error) => {
        res.status(404).render(`misc${ash.sep}404`);
    });
});

// Event Index Page
router.get("/", (req, res) => {
    // Display a list of all events; it can be in an unordered list, or a table
    // Each of these events need to link to the single event page
    data.events.getAllEvents().then((allEvents) => {
        if(ash.debug) {
            res.render(`misc${ash.sep}debug`, { events: allEvents });    
        } else {
            res.render(`layouts${ash.sep}events${ash.sep}all`, { events: allEvents });    
        }
    }, (error) => {
        res.status(404).render(`misc${ash.sep}404`);
    });
});

module.exports = router;