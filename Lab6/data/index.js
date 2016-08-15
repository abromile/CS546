const recipeRoutes = require("./recipes");
const commentRoutes = require("./comments");

let constructorMethod = (app) => {
    app.use("/recipes", recipeRoutes);
    app.use("/comments", commentRoutes);
};

module.exports = {
    recipes: require("./recipes"),
    comments: require("./comments")
};