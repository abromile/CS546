let exportedMethods = {
    insertText(string1, string2, numTimes, space) {
        console.log("ayyyyyyy {}, {}, {}, {}", string1, string2, numTimes, space);
        if (typeof string1 !== "string") throw "1Must provide a string";
        if (string1 === undefined) throw "2Must provide a string";
        if (typeof string2 !== "string") throw "3Must provide a string";
        if (string2 === undefined) throw "4Must provide a string";
        
        if (typeof numTimes !== "number") throw "5Must provide a number";
        if (isNaN(numTimes)) throw "6Must provide a number";
        if (typeof space !== "number") throw "7Must provide a number";
        if (isNaN(space)) throw "8Must provide a number";
    
        if (space*string2.length > string1.length) throw "Numbers are too big for input";

        for (i = space; i < string1.length, numTimes > 0; i+=(string2.length+space), numTimes--){
            string1 = string1.substring(0, i) + string2 + string1.substring(i, string1.length);
        }
        return string1;
    }
}

module.exports = exportedMethods;