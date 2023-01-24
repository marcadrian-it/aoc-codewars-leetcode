const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// dict with the score of each alphabet letter
const alphabetDict = {};
for (let i = 0; i < alphabet.length; i++) {
    alphabetDict[alphabet[i]] = i + 1;
}

function high(x) {
    let words = x.split(" ");
    let maxScore = 0;
    let maxWord = "";
    for (let word of words) {
        let score = 0;
        for (let letter of word) {
            score += alphabetDict[letter];
        }
        if (score > maxScore) {
            maxScore = score;
            maxWord = word;
        }
    }
    return maxWord;
}
/*
P: str of words in lower case
R: highest scoring word value to be returned
E:
*/