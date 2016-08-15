const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const comments = require("./comments");
const uuid = require('node-uuid');

let exportedMethods = {
    getAllRecipes() {
        return recipes().then((recipeCollection) => {
            return recipeCollection.find({}).toArray();
        })
    },
    getRecipeById(id) {
        if (id === undefined) return Promise.reject("No id provided");

        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: id }).then((recipe) => {
                if (!recipe) throw "Post not found";
                return recipe;
            });
        });
    },
    addRecipe(title, ingredients, steps, comments) {
        if (title === undefined) return Promise.reject("No title provided");
        if (!ingredients) return Promise.reject("No ingredients provided");
        if (!steps) return Promise.reject("No steps provided");
        if (!comments) return Promise.reject("No comments provided");
        
        return recipes().then((recipeCollection) => {
                let newRecipe = {
                    title: title,
                    ingredients: ingredients,
                    steps: steps,
                    comments: comments,
                    _id: uuid.v4()
                };

                return recipeCollection.insertOne(newRecipe).then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                }).then((newId) => {
                    return this.getRecipeById(newId);
                });
            });
        });
    },
    removeRecipe(id) {
        if (id === undefined) return Promise.reject("No id provided");
        
        return recipes().then((recipeCollection) => {
            return recipeCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete recipe with id of ${id}`)
                } else { }
            });
        });
    },
    updateRecipe(id, title, ingredients, steps, comments) {
        if (id === undefined) return Promise.reject("No id provided");
        if (!title) return Promise.reject("No title provided");
        if (!ingredients) return Promise.reject("No ingredients provided");
        if (!steps) return Promise.reject("No steps provided");
        if (!comments) return Promise.reject("No comments provided");
        
        return recipes().then((recipeCollection) => {
                let updatedRecipe = {
                    title: title,
                    ingredients: ingredients,
                    steps: steps,
                    comments: comments,
                    _id: id
                };

                return recipeCollection.updateOne({ _id: id }, then).then((result) => {
                    return this.getRecipeById(id);
                });
            });
        });
    },
    removeRecipeById(receipeId) {
        if (recipeId === undefined) return Promise.reject("No recipeId provided");

        return recipes().then((recipeColletcion) => {
            return recipeColletcion.removeOne({ _id: recipeId }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete recipe with id of ${recipeId}`)
                }
            });
        }); 
    }
        
        
        
        
        
    getCommentById(commentId) {
        if (commentId === undefined) return Promise.reject("No commentId provided");
        
        return recipes().update({ $pull: { "comments": { _id: commentId } } }).then(function() {
            return exports.getMovie(id);
        });
    },
    addCommentToRecipe(recipeId, poster, content) {
        if (recipeId === undefined) return Promise.reject("No recipeId provided");
        if (!poster) return Promise.reject("No poster provided");
        if (!content) return Promise.reject("No content provided");
        
        return recipes().update({ _id: id }, { $push: { "comments": {poster:poster, comment:content} }).then(function() {
                return exports.getRecipeById(recipeId);
            });
    },
    updateCommentOnRecipe(recipeId, commentId, poster, content) {
        if (recipeId === undefined) return Promise.reject("No recipeId provided");
        if (!commentId) return Promise.reject("No commentId provided");
        if (!poster) return Promise.reject("No poster provided");
        if (!content) return Promise.reject("No content provided");
        
        return recipes().update({_id: recipeId}, { $set: { "comment": {poster:poster, comment:content} } }).then(function() {
                return exports.getRecipeById(recipeId);
            });
    },
    getCommentsOnRecipe(recipeId) {
        if (recipeId === undefined || typeof recipeId !== "string"){
            throw "Must have a valid recipe id.";
        }
        return getRecipeById(recipeId).comments;
    },
    removeCommentOnRecipe(recipeId, commentId) {
        if (recipeId === undefined) return Promise.reject("No recipeId provided");
        if (!commentId) return Promise.reject("No commentId provided");

        return recipes().update({ _id: recipeId }, { $pull: { "comments": { _id: commentId } } }).then(function() {
            return exports.getRecipeById(recipeId);
        });   
    }
}

module.exports = exportedMethods;