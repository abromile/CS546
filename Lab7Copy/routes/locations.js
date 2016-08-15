'use strict';
const express = require('express');
const router = express.Router();
const data = require("../data");
const ash = require("../config/util");

// Single Location Page
router.get("/:id", (req, res) => {
    // Find a location by the provided id, 
    // then display its information
    // As well as listing all events that will be at this location
    // Each of these events need to link to the event page and show the event name
    // If a location is not found, display the 404 error page
    
    
    data.locations.getLocation(req.params.id).then((location) => {
        if(ash.debug) {
            res.render(`misc${ash.sep}debug`, { location: location });
        } else {
            res.render(`layouts${ash.sep}locations${ash.sep}single`, { location: location });
        }
    }, (error) => {
        res.status(404).render(`misc${ash.sep}404`);
    });
});

// Location Index Page
router.get("/", (req, res) => {
    // Display a list of all locations; it can be in an unordered list, or a table
    // Each of these locations need to link to the single location page
    debugger;
    data.locations.getAllLocations().then((allLocations) => {
        if(ash.debug) {
            res.render(`misc${ash.sep}debug`, { locations: allLocations });
        } else {
            res.render(`layouts${ash.sep}locations${ash.sep}all`, { locations: allLocations });
        }
    }, (error) => {
        res.status(404).render(`misc${ash.sep}404`);
    });
});

module.exports = router;