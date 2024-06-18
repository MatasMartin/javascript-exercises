const sumAll = function(start, end) {

    let result = 0;

    if(start < 0 || end < 0) {
        return('ERROR')
    }else if(typeof start !== "number" || typeof end !== "number"){
        return('ERROR')
    }else {
        if(end > start){
            for(let i=start;i<=end;i++){
                result = result + i;
            }
        }else{
            for(let i=end;i<=start;i++){
                result = result + i;
            }
        }
    }

    

    

    return(result);

};

// Do not edit below this line
module.exports = sumAll;
