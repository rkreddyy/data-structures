let mostRepeatedWord = function (sentence) {
    let words = sentence.match(/\w+/g);
    let wordsCount = {};
    let mostRepeatedWord, maxCount = 0;
    words.forEach(word => {
        // wordsCount[word] = wordsCount[word] ? wordsCount[word] + 1 : 1;
        wordsCount[word] = (wordsCount[word] || 0) + 1;
    });

    for (let w in wordsCount) {
        if (wordsCount[w] > maxCount) {
            maxCount = wordsCount[w];
            mostRepeatedWord = w;
        }
    }

    console.log(`Most repeated word is: '${mostRepeatedWord}', repeated for: ${maxCount} times`);
}

mostRepeatedWord("Hello. Welcome to the world of the JS.");