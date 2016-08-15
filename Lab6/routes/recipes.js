const express = require('express');
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;

router.get("/", (req, res) => {
    recipeData.getAllRecipes().then((recipeList) => {
        res.json(recipeList);
    }, () => {
        // Something went wrong with the server!
        res.sendStatus(500);
    });
});

router.get("/:id", (req, res) => {
    recipeData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});
    
router.post("/", (req, res) => {
    recipeData.addRecipe(req.params.title, req.params.ingredients, req.params.steps, req.params.comments).then((recipe) => {
        res.json(recipe);
    }, () => {
        // Something went wrong with the server!
        res.sendStatus(500);
    });
});
    
router.put("/:id", (req), res) => {
    if(req.params.title) {
        recipeData.updateTitle(req.params.title).then((recipe) => {
            res.json(recipe);
        }, () => {
            // Something went wrong with the server!
            res.sendStatus(500);
        });
    }
    if(req.params.ingredients) {
        recipeData.updateIngredients(req.params.ingredients).then((recipe) => {
            res.json(recipe);
        }, () => {
            // Something went wrong with the server!
            res.sendStatus(500);
        });
    }
    if(req.params.steps) {
        recipeData.updateSteps(req.params.steps).then((recipe) => {
            res.json(recipe);
        }, () => {
            // Something went wrong with the server!
            res.sendStatus(500);
        });
    }
    if(req.params.comments) {
        recipeData.updateComments(req.params.comments).then((recipe) => {
            res.json(recipe);
        }, () => {
            // Something went wrong with the server!
            res.sendStatus(500);
        });
    }
});
    
router.delete("/:id", (req, res) => {
    recipteData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});

router.get("/comments/recipe/:recipeId", (req, res) => {
    recipeData.getCommentsOnRecipe(req.params.recipeId).then((comments) => {
        res.json(comments);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});
    
router.get("/comments/:commentId", (req, res) => {
    recipeData.getCommentById(req.params.commentId).then((comment) => {
        res.json(comment);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});
    
router.post("/comments/:recipeId", (req, res) => {
    recipeData.addCommentToRecipe(req.params.recipeId, req.params.poster, req.params.content).then((comment) => {
        res.json(comment);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});
    
router.put("/comments/:recipeId/:commentId", (req), res) => {
    if(req.params.poster) {
        recipeData.updatePoster(req.params.poster).then((comment) => {
            res.json(comment);
        }, () => {
            // Something went wrong with the server!
            res.sendStatus(500);
        });
    }
    if(req.params.content) {
        recipeData.updateContent(req.params.content).then((comment) => {
            res.json(comment);
        }, () => {
            // Something went wrong with the server!
            res.sendStatus(500);
        });
    }
});
    
router.delete("/comments/:id", (req, res) => {
    recipeData.getCommentById(req.params.commentId).then((comment) => {
        res.json(comment);
    }, (error) => {
        // Not found!
        res.sendStatus(404);
    });
});
    
module.exports = router;