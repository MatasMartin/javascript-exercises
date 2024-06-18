const convertToCelsius = function(num) {

  let result = 0;

  result = (num - 32) * (5 / 9);

  if(result % 1 == 0){
    return result;
  }else{
    result = Math.round(result * 10) / 10;
    return result;
  }

  

  

};

const convertToFahrenheit = function(num) {

  let result = 0;

  result = (num / (5 / 9)) + 32;
  
  if(result % 1 == 0){
    return result;
  }else{
    result = Math.round(result * 10) / 10;
    return result;
  }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
