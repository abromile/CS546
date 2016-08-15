const mongoCollections = require("../config/mongoCollections");
const classes = mongoCollections.classes;
//const uuid = require('node-uuid');

let exportedMethods = {
    getAllClasses() {
        return classes().then((classesCollection) => {
            return classesCollection.find({}).toArray();
        });
    },
    // This is a fun new syntax that was brought forth in ES6, where we can define
    // methods on an object with this shorthand!
    getClassByCode(code) {
        return classes().then((classesCollection) => {
            return classesCollection.findOne({ courseCode: code }).then((class1) => {
                if (!class1) throw "Class not found";
                return class1;
            });
        });
    },
    addClass(code, name, professor, description) {
        if (code === undefined || typeof code !== "string"){
            throw "Must have a valid course code.";
        }
        if (name === undefined || typeof name !== "string"){
            throw "Must have a valid course name.";
        }
        if (professor === undefined || typeof professor !== "string"){
            throw "Must have a valid professor name.";
        }
        if (description === undefined || typeof description !== "string"){
            throw "Must have a valid description.";
        }
        return classes().then((classesCollection) => {
            let newClass = {
                courseCode: code,
                name: name,
                professor: professor,
                description: description
            };

            return classesCollection.insertOne(newClass).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newCode) => {
                return this.getClassByCode(newCode);
            });
        });
    },
    removeClass(code) {
        if (code === undefined || typeof code !== "string"){
            throw "Must have a valid course code.";
        }
        return classes().then((classesCollection) => {
            return classesCollection.removeOne({ courseCode: code }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete class with course code of ${code}`)
                }
            });
        });
    },
    updateClass(code, name, professor, description) {
        if (code === undefined || typeof code !== "string"){
            throw "Must have a valid course code.";
        }
        if (name === undefined || typeof name !== "string"){
            throw "Must have a valid course name.";
        }
        if (professor === undefined || typeof professor !== "string"){
            throw "Must have a valid professor name.";
        }
        if (description === undefined || typeof description !== "string"){
            throw "Must have a valid description.";
        }
        return this.getClassByCode(code).then((currentClass) => {
            let updatedClass = {
                courseCode: code,
                name: name,
                professor: professor,
                description: description
            };

            return classesCollection.updateOne({ courseCode: code }, updatedClass).then(() => {
                return this.getClassByCode(code);
            });
        });
    }
}

module.exports = exportedMethods;