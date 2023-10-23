function reverseWordsInSentence(sentence) {
    const words = sentence.split(" "); 

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]); 
    }

    const reversedSentence = words.join(" "); 
    return reversedSentence;
}

function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i]; 
    }
    return reversed;
}

const inputSentence = "This is a sunny day";
const reversed = reverseWordsInSentence(inputSentence);
console.log(reversed);


// For Input : "This is a sunny day"
// Output is : "sihT si a ynnus yad"
