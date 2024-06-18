const removeFromArray = function(Array, one, two, three, four) {
    let lengthOf;
    lengthOf = Array.length;
    let result = [];

    for(let i=0;i<lengthOf;i++){
        if(Array[i]===one || Array[i]===two || Array[i]===three || Array[i]===four){
            Array[i] = "-NONE-";
        }
    }

    for(let i=0;i<lengthOf;i++){
        if(Array[i] != "-NONE-"){
            result.push(Array[i]);
        }
    }

    return(result);
};

// Do not edit below this line
module.exports = removeFromArray;
