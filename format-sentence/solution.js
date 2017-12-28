function formatWords(words){
    if (words === null){
    return ""}
    newArray = [];
    for(let i of words)
    i && newArray.push(i);
    var newStr = "";
    if (newArray.length === 1) {
        newStr = newArray[0];
    } else if (newArray.length === 2) {
        newStr = newArray.join(' and ');
    } else if (newArray.length > 2) {
        newStr = newArray.slice(0, -1).join(', ') + ' and ' + newArray.slice(-1);
     }
    console.log(newStr);
    return newStr;
}