const educationRoutes = require("./education");
const hobbiesRoutes = require("./hobbies");
const classesRoutes = require("./classes");

let constructorMethod = (app) => {
    app.use("/education", educationRoutes);
    app.use("/hobbies", hobbiesRoutes);
    app.use("/classes", classesRoutes);
};

module.exports = {
    education: require("./education"),
    hobbies: require("./hobbies"),
    classes: require("./classes")
};