function CheckLength(word) {
    var wordLength = word.length;
    if(wordLength < 10) {
        return "The word fits";
    } else {
        return "The word is too long";
    }
}

console.log(CheckLength("pneumonoultramicroscopicsilicovolcanoconiosis"))