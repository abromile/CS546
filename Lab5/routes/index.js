const educationRoutes = require("./education");
const hobbiesRoutes = require("./hobbies");
const classesRoutes = require("./classes");

let constructorMethod = (app) => {
    app.use("/education", educationRoutes);
    app.use("/hobbies", hobbiesRoutes);
    app.use("/classes", classesRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;