const reverseString = function(text) {
    let letter = "a";
    let lengthOf = 0;
    let answer = "";
    lengthOf = text.length;

    for(let i = 0; i < lengthOf; i++){
        letter = text.charAt((lengthOf-1)-i)
        answer = answer + letter;
    }

    return(answer);
};

// Do not edit below this line
module.exports = reverseString;
