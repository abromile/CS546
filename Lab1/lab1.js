// Ashley Bromiley
// CS546 Lab1
// 25 April 2016

function sumOfSquares(num1, num2, num3) {
    if (isNaN(num1)) { 
        throw ("All inputs must be numbers.");
    }
    if (isNaN(num2)) { 
        throw ("All inputs must be numbers.");
    }
    if (isNaN(num3)) { 
        throw ("All inputs must be numbers.");
    }
    return ((num1 * num1) + (num2 * num2) + (num3 * num3));   
}

console.log();
console.log(sumOfSquares(5, 3, 10));
//console.log(sumOfSquares(5, "a", 10));
console.log();

function sayHelloTo(firstName, lastName, title) {
    if (firstName === undefined) {
        throw ("No name given.");  
    }
    else if (lastName === undefined) {
        console.log(`Hello, ${firstName}!`);
    }
    else if (title === undefined) {
        console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);
    }
    else {
        console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);
    }    
}

//sayHelloTo();
sayHelloTo("Phil");
sayHelloTo("Phil", "Barresi");
sayHelloTo("Phil", "Barresi", "Mr.");
console.log();

function cupsOfCoffee(howManyCups) {
    if (isNaN(howManyCups)) { 
        throw ("Input must be a number.");
    }
    for (let cups = howManyCups; cups > 0; cups--) {
        if (cups === 2) {
            console.log(`${cups} cups of coffee on the desk! ${cups} cups of coffee!`);
            console.log(`Pick one up, drink the cup, ${cups - 1} cup of coffee on the desk!`);
            console.log();
        }
        else if (cups === 1) {
            console.log(`${cups} cup of coffee on the desk! ${cups} cup of coffee!`);
            console.log(`Pick it up, drink the cup, no more coffee left on the desk!`);
        }
        else {
            console.log(`${cups} cups of coffee on the desk! ${cups} cups of coffee!`);
            console.log(`Pick one up, drink the cup, ${cups - 1} cups of coffee on the desk!`);
            console.log();
        }
    }
}

//cupsOfCoffee();
cupsOfCoffee(5);
console.log();

// NOTE: The assignment sounds confused on what to name this function.
function occurencesOfSubstring(fullString, substring) {
    if (typeof(fullString) !== "string") {
        throw ("All inputs must be strings.");
    }
    if (typeof(substring) !== "string") {
        throw ("All inputs must be strings.");
    }
    let occurences = 0;
    let len = substring.length;
    for(let i = 0; i < fullString.length; i++) {
        if(fullString.substr(i, len) === substring) {
            occurences += 1;
        }
    }
    return occurences;
}

console.log(occurencesOfSubstring("Helllllllo, class!", "ll"));
//console.log(occurencesOfSubstring("Helllllllo, class!", 12));
//console.log(occurencesOfSubstring(0, "ll"));
console.log();


var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations. Question?";

function randomizeSentences(paragraph) {
    if (typeof(paragraph) !== "string") {
        throw ("Input must be a string.");
    }
    
    paragraph = paragraph.replace('.', '.\0').trim();
    paragraph = paragraph.replace('?', '?\0').trim();
    paragraph = paragraph.replace('!', '!\0').trim();

    array = paragraph.split(/\0/);
    
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array.join("");
}


//randomizeSentences('hello I am chris! how are you? cool.');


console.log(randomizeSentences(paragraph));
console.log(randomizeSentences("Hey! Question? Sentence."));
console.log(randomizeSentences(123124));



