const fs = require('fs');

let fileData = exports = module.exports;

fileData.getFileAsString = (path) => {
    return new Promise((fulfill, reject) => {
        if (!path) throw "No path provided";

        fs.readFile(path, "utf-8", (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            fulfill(data);
        });
    })
};

fileData.getFileAsJSON = (path) => {
    return new Promise((fulfill, reject) => {
        if (!path) throw "No path provided";

        fs.readFile(path, "utf-8", (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            try {
                let jsonData = JSON.parse(data);
                fulfill(jsonData);
            } catch (parsingError) {
                reject(parsingError);
            }
        });
    })
};

    
    
fileData.saveStringToFile = (path, text) => {
    return new Promise((fulfill, reject) => {
        if (!path) throw "No path provided";
        if (!text) throw "No text provided";

        fs.writeFile(path, JSON.stringify(text, null, 4), (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            fulfill(true);
        });
    });
};

fileData.saveJSONToFile = (path, obj) => {
    return new Promise((fulfill, reject) => {
        if (!path) throw "No path provided";
        if (!obj) throw "No JSON provided";

        fs.writeFile(path, obj, (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            fulfill(true);
        });
    });
};

    
