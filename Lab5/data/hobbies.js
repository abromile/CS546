const mongoCollections = require("../config/mongoCollections");
const hobbies = mongoCollections.hobbies;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllHobbies() {
        return hobbies().then((hobbiesCollection) => {
            return hobbiesCollection.find({}).toArray();
        });
    },
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    getHobbyById(id) {
        if (id === undefined || typeof id !== "string"){
            throw "Must have a valid id.";
        }
        return hobbies().then((hobbiesCollection) => {
            return hobbiesCollection.findOne({ _id: id }).then((hobby) => {
                if (!hobby) throw "Hobby not found";
                return hobby;
            });
        });
    },
    addHobby(name, description) {
        if (name === undefined || typeof name !== "string"){
            throw "Must have a valid course name.";
        }
        if (description === undefined || typeof description !== "string"){
            throw "Must have a valid description.";
        }
        return hobbies().then((hobbiesCollection) => {
            let newHobby = {
                name: name,
                description: description,
                _id: uuid.v4()
            };

            return hobbiesCollection.insertOne(newHobby).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getHobbyById(newId);
            });
        });
    },
    removeHobby(id) {
        if (id === undefined || typeof id !== "string"){
            throw "Must have a valid id.";
        }
        return hobbies().then((hobbiesCollection) => {
            return hobbiesCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete hobby with id of ${id}`)
                }
            });
        });
    },
    updateHobby(id, name, description) {
        if (id === undefined || typeof id !== "string"){
            throw "Must have a valid id.";
        }
        if (name === undefined || typeof name !== "string"){
            throw "Must have a valid course name.";
        }
        if (description === undefined || typeof description !== "string"){
            throw "Must have a valid description.";
        }
        return this.getUserById(id).then((currentUser) => {
            let updatedHobby = {
                name: name,
                description: description
            };

            return hobbiesCollection.updateOne({ _id: id }, updatedHobby).then(() => {
                return this.getHobbyById(id);
            });
        });
    },
}

module.exports = exportedMethods;