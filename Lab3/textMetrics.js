module.exports = {
    /* STUFF TO PRINT
    totalLetters: "total number of letters in the text",
    totalWords: "total number of words in the text",
    uniqueWords: "total number of unique words that appear in the text",
    longWords: "number of words in the text that are 6 or more letters long",
    averageWordLength: "the average number of letters in a word in the text",
    numberOfSentences: "total number of sentences in the text",
    textComplexity: "totalWords/numberOfSentences + (longWords x 100)/totalWords",
    wordOccurrences: {
        word1: number of times that word appears in the text,
        word2: number of times that word appears in the text,
        etc... 
    },*/

    createMetrics: function(text) {
        if (!text) throw "No text provided";
        if (typeof(text) !== "string") throw ("Text must be a string");
    
        let totalLetters = 0;
        let totalWords = 0;
        let uniqueWords = 0;
        let longWords = 0;
        let averageWordLength = 0;
        let numberOfSentences = 0;
        let textComplexity = 0;
        let wordOccurances = {};
        
        text = text.toLowerCase();
        
        wordText = text.replace('.', '');
        wordText = wordText.replace('?', '');
        wordText = wordText.replace('!', '');
        wordText = wordText.replace(',', '');
        wordText = wordText.replace('"', '');
        // NOTE: The \n does weird things depending on where it is in the sentence. Sometimes it catches
        // it, sometimes it doesn't. I don't know.
        wordText = wordText.replace('\n', " ");
        wordText = wordText.replace('\\n', " ");
        wordArray = wordText.split(" ");
        //console.log(wordArray);
        //console.log();
        
        SentenceText = text.replace('.', '.\0').trim();
        SentenceText = SentenceText.replace('?', '?\0').trim();
        SentenceText = SentenceText.replace('!', '!\0').trim();
        sentenceArray = SentenceText.split(/\0/);
        //console.log(sentenceArray); 
        //console.log();
        
        function countLetters(word, index, array) {
            currWordLetters = word.length;
            totalLetters = totalLetters + currWordLetters;
            return currWordLetters
        }
        wordArray.forEach(countLetters);
        
        totalWords = wordArray.length;
        
        function isLongWord(word) {
            return word.length >= 6;   
        }
        longWordArray = wordArray.filter(isLongWord);
        longWords = longWordArray.length;
        
            
        function countOccurances(word, index, array) {
            if (wordOccurances[word] === undefined) {
                wordOccurances[word] = 1;   
            } else {
                wordOccurances[word]++;
            }
        }
        wordArray.forEach(countOccurances);
        uniqueWords = Object.keys(wordOccurances).length;
        
        averageWordLength = (totalLetters / totalWords).toFixed(2);
        
        numberOfSentences = sentenceArray.length - 1;
        
        textComplexity = ((totalWords/numberOfSentences) + ((longWords * 100)/totalWords)).toFixed(2);
        
        console.log(`totalLetters: ${totalLetters},`);
        console.log(`totalWords: ${totalWords},`);
        console.log(`uniqueWords: ${uniqueWords},`);
        console.log(`longWords: ${longWords},`);
        console.log(`averageWordLength: ${averageWordLength},`);
        console.log(`numberOfSentences: ${numberOfSentences},`);
        console.log(`textComplexity: ${textComplexity},`);
        console.log(`wordOccurances: ${JSON.stringify(wordOccurances, null, 4)}`);
        
    }
}