const mongoCollections = require("../config/mongoCollections");
const schools = mongoCollections.education;
//const users = require("./users");
const uuid = require('node-uuid');

let exportedMethods = {
    getAllSchools() {
        return schools().then((schoolsCollection) => {
            return schoolsCollection.find({}).toArray();
        })
    },
    getSchool(id) {
        if (id === undefined || typeof id !== "string" || id !== "highschool" || id !== "undergrad"){
            throw "Must have a valid category.";
        }
        return schools().then((schoolsCollection) => {
            return schoolsCollection.find({ id: id}).toArray();
        });
    },
    getSchoolById(id) {
        if (id === undefined || typeof id !== "string"){
            throw "Must have a valid id.";
        }
        return schools().then((schoolsCollection) => {
            return schoolsCollection.findOne({ _id: id }).then((school) => {
                if (!school) throw "School not found";
                return school;
            });
        });
    },
    addHighSchool(name) {
        if (name === undefined || typeof name !== "string"){
            throw "Must have a valid name.";
        }
        return schools().then((schoolsCollection) => {
            let newSchool = {
                id: highschool,
                _id: uuid.v4(),
                name: name
            };

            return schoolsCollection.insertOne(newSchool).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getSchool(newId);
            });
        });
    },
    addUndergrad(name, degree) {
        if (name === undefined || typeof name !== "string"){
            throw "Must have a valid name.";
        }
        if (degree === undefined || typeof degree !== "string"){
            throw "Must have a valid degree.";
        }
        return schools().then((schoolsCollection) => {
            let newSchool = {
                id: undergrad,
                _id: uuid.v4(),
                name: name,
                degree: degree
            };

            return schoolsCollection.insertOne(newSchool).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getSchool(newId);
            });
        });
    },
    removeSchool(id) {
        if (id === undefined || typeof id !== "string"){
            throw "Must have a valid id.";
        }
        return schools().then((schoolsCollection) => {
            return schoolsCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete school with id of ${id}`)
                }
            });
        });
    },
    updateSchool(id, name, degree) {
        if (id === undefined || typeof id !== "string"){
            throw "Must have a valid id.";
        }
        if (name === undefined || typeof name !== "string"){
            throw "Must have a valid name.";
        }
        if (degree === undefined || typeof degree !== "string"){
            throw "Must have a valid degree.";
        }
        return this.getSchoolById(id).then((currentSchool) => {
            if (degree) {
                let updatedClass = {
                    id: undergrad,
                    name: name,
                    degree: degree
                };
            } else {
                let updatedClass = {
                    id: highschool,
                    name: name
                };
            }

            return schoolsCollection.updateOne({ _id: id }, updatedSchool).then(() => {
                return this.getSchoolById(id);
            });
        });
    }
}

module.exports = exportedMethods;