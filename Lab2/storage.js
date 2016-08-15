const uuid = require("node-uuid");

let stor = {};

module.exports = {
    
    set: function(id, data){
        if (id === undefined){
            throw "ID cannot be undefined.";
        }
        if (data === undefined){
            throw "Data cannot be undefined.";
        }
        
        stor[id] = data;
        return stor[id];
    },
    
    unset: function(id){
        if (id === undefined){
            throw "ID cannot be undefined.";
        }
        if (stor[id] === undefined){
            throw "ID does not exist.";
        }
        
        stor[id] = undefined;
    },
    
    get: function(id){
        if (id === undefined){
            throw "ID cannot be undefined.";
        }
        if (stor[id] === undefined){
            throw "ID does not exist.";
        }
        
        return stor[id];
    }
};