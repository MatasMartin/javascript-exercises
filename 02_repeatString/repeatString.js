const repeatString = function(string, num) {
    let temp = "";
    for(let i = 0; i < num; i++){
        temp = temp + string;
    }
    if(num < 0) {
        return("ERROR")
    }else {
        return(temp)
    }
};

// Do not edit below this line
module.exports = repeatString;
