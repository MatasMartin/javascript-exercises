const leapYears = function(year) {

    let check = true;

    if(year % 100 == 0) {
        check = false;
    }
    if(year % 400 == 0) {
        check = true;
    }

    if(year % 4 == 0 && check == true) {
        return(true);
    }else {
        return(false);
    }

};

// Do not edit below this line
module.exports = leapYears;
