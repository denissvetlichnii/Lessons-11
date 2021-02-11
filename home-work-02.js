function ConcatTwoStrings(string1,string2) {
    var newString = string1 + string2;
    if(newString.length >= 20) {
        var temp = newString.substring(0,20);
        var updateString = temp + "...";
        return updateString;
    } else {
        return newString;
    }
}
console.log(ConcatTwoStrings("i don't"," know"))