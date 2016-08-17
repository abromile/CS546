const express = require('express');
const router = express.Router();
const data = require("../data");
const form = data.form;

router.get("/static", (req, res) => {
    res.render("form/static", {});
});

router.get("/server", (req, res) => {
    res.render("form/server", {});
});

router.post("/server", (req, res) => {
    let firstString = req.body.string1;
    let secondString = req.body.string2;
    let firstNumber = parseInt(req.body.number1);
    let secondNumber = parseInt(req.body.number2);
    let result;
    
    try {
        result = form.insertText(firstString, secondString, firstNumber, secondNumber);
    } catch (e) {
        res.render("form/server", { firstString: firstString, secondString: secondString, firstNumber: firstNumber, secondNumber: secondNumber, error: e });
        return;
    }

    res.render("form/server", { firstString: firstString, secondString: secondString, firstNumber: firstNumber, secondNumber: secondNumber, result: result });
});

module.exports = router;