// TESTING FOR FILEDATA.JS

const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
/*
let cTeamString = fileData.getFileAsString("the-c-team.json");
cTeamString.then((cTeamDataString) => {
    //let stringData = cTeamDataString;
    console.log(cTeamDataString);
    return cTeamDataString;
}).catch((error) => {
    console.error(error);
    return {};
});


let cTeamJSON = fileData.getFileAsJSON("the-c-team.json");
cTeamString.then((cTeamDataJSON) => {
    //let JSONData = cTeamDataJSON;
    console.log(cTeamDataJSON);
    return cTeamDataJSON;
}).catch((error) => {
    console.error(error);
    return {};
});
    
let cWriteString = fileData.saveStringToFile("save_string.txt", "hi");
cWriteString.then((cWriteStringResult) => {
    console.log(cWriteStringResult);
    return cWriteStringResult;
}).catch((error) => {
    console.error(error);
    return {};
});
    
    
let cWriteJSON = fileData.saveJSONToFile("save_json.json", "lo");
cWriteJSON.then((cWriteJSONResult) => {
    console.log(cWriteJSONResult);
    return cWriteJSONResult;
}).catch((error) => {
    console.error(error);
    return {};
});
*/  
    
//I think all thses work now...
    
// NOTE: The \n does weird things depending on where it is in the sentence. Sometimes it catches it
// sometimes it doesn't. I don't know.
textMetrics.createMetrics("Hello, my friends! This\nis a great day to\nsay hello.");

let Ch1String = fileData.getFileAsString("chapter1.txt");
Ch1String.then((Ch1StringData) => {
    textMetrics.createMetrics(Ch1StringData);
    return Ch1StringData;
}).catch((error) => {
    console.error(error);
    return {};
});

let Ch2String = fileData.getFileAsString("chapter2.txt");
Ch2String.then((Ch2StringData) => {
    textMetrics.createMetrics(Ch2StringData);
    return Ch2StringData;
}).catch((error) => {
    console.error(error);
    return {};
});

let Ch3String = fileData.getFileAsString("chapter3.txt");
Ch3String.then((Ch3StringData) => {
    //let stringData = cTeamDataString;
    textMetrics.createMetrics(Ch3StringData);
    return Ch3StringData;
}).catch((error) => {
    console.error(error);
    return {};
});