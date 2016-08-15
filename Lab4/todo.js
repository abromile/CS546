const mongoCollections = require("./mongoCollections");
const todo = mongoCollections.todoItems;


let exportedMethods = {
    
    createTask(title, description) {
        if (title === undefined || typeof title !== "string"){
            throw "Must have a valid title.";
        }
        if (description === undefined || typeof description !== "string"){
            throw "Must have a valid description.";
        }
        return todo().then((todoCollection) => {
            let newTask = {
                _id: uuid.v4(),
                title: title,
                description: description,
                completed: false,
                timeCompleted: null
            };

            return todoCollection.insertOne(newTask).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getTask(newId);   
            });
        });
    },
    
    getTask(id) {
        if (id === undefined || typeof id !== "string"){
            throw "Must have a valid id.";
        }
        return todo().then((todoCollection) => {
            return todoCollection.findOne({ _id: id });
        });
    },
        
    updateTask(updatedTask) {
        if (updatedTask === undefined || typeof id !== "object"){
            throw "Must have a valid id.";
        }
        return todo().then((todoCollection) => {
            return todoCollection.updateOne({ _id: updatedTask._id }, updatedTask).then() => {
                return this.getTask(updatedTask._id); 
            });
        }

    },
        
    removeTask(id) {
        if (id === undefined || typeof id !== "string"){
            throw "Must have a valid id.";
        }
        return todo().then((todoCollection) => {
            return todoCollection.removeOne({ _id: id }).then((deletedInfo) => {
                if (deletedInfo.deletedCount === 0) {
                    throw (`Could not delete dog with id of ${id}`)
                }
            });
        });
    }
}

module.exports = exportedMethods;