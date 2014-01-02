var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = ['', 'ten', 'twenty-', 'thirty-', 'fourty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'];

exports.noDecimals = function(number){
    return Math.floor(number);
}

exports.noSpaces = function(number){
    var noSpace = number.replace(" ","");
    return noSpace;
}

exports.noCommas = function(number){
    var noComma = number.replace(",","");
    return noComma;
}

exports.singleDigit = function(number) {
    return ones[number];
}

exports.arrayify = function(number) {
    var stringNum = number.toString();
    var arrayOfNums = stringNum.split("");
    var length = arrayOfNums.length;
    for(var i=0; i<length; i++) { arrayOfNums[i] = +arrayOfNums[i]; }
    return arrayOfNums;
}