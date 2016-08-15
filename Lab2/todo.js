const uuid = require("node-uuid");

module.exports = {
    
    createTask: function(title, description){
        if (title === undefined || typeof title !== "string"){
            throw "Must have a valid title.";
        }
        if (description === undefined || typeof description !== "string"){
            throw "Must have a valid description.";
        }
        let task = {
            id: uuid.v4(),
            title: title,
            description: description,
            completed: false,
            timeCompleted: null
        };
        return task;
    },
    
    completeTask: function(task){
        if (task === undefined || typeof task !== "object"){
            throw "Must have a valid task object.";
        }
        task.completed = true;
        task.timeCompleted = new Date();
    }
};




