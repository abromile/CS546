(function () {
    let calculation = {
        insertText: function (string1, string2, numTimes, space) {
            if (typeof string1 !== "string") throw "Must provide a string";
            if (string1 === undefined) throw "Must provide a string";
            if (typeof string2 !== "string") throw "Must provide a string";
            if (string2 === undefined) throw "Must provide a string";
            if (typeof numTimes !== "number") throw "Must provide a number";
            if (isNaN(numTimes)) throw "Must provide a number";
            if (typeof space !== "number") throw "Must provide a number";
            if (isNaN(space)) throw "Must provide a number";
    
            if (space*string2.length > string2.length) throw "Numbers are too big for input";

            for (i = space; i < string1.length, numTimes > 0; i+=(string2.length+space), numTimes--){
                string1 = string1.substring(0, i) + string2 + string1.substring(i, string1.length);
            }
            return string1;
        },
    };

    function operationStringToFunction(operation) {
        if (!operation) throw "No operation provided";
        var returnFunction = calculatorMethods[operation];

        if (returnFunction === undefined) throw "No such operation";

        return returnFunction;
    }
    
    var staticForm = document.getElementById("static-form");

    if (staticForm) {
        // We can store references to our elements; it's better to 
        // store them once rather than re-query the DOM traversal each time
        // that the event runs.
        var firstString = document.getElementById("string1");
        var secondString = document.getElementById("string2");
        var firstNumber = document.getElementById("num1");
        var secondNumber = document.getElementById("num2");

        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        var resultContainer = document.getElementById("result-container");
        var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        // We can take advantage of functional scoping; our event listener has access to its outer functional scope
        // This means that these variables are accessible in our callback
        staticForm.addEventListener("submit", function (event) {
            event.preventDefault();

            try {
                // hide containers by default
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");

                // Values come from inputs as strings, no matter what :(
                var firstStringValue = firstString.value;
                var secondStringValue = secondString.value;
                var firstNumberValue = firstNumber.value;
                var secondNumberValue = secondNumber.value;

                var parsedFirstNumberValue = parseInt(firstNumberValue);
                var parsedSecondNumberValue = parseInt(secondNumberValue);

                var result = insertText(firstStringValue, secondStringValue, parsedFirstNumberValue, parsedSecondNumberValue);
                //resultTextElement.textContent = "The result is " + result;
                resultContainer.classList.remove("hidden");
            } catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();