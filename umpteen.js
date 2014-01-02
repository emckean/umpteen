var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = ['', 'ten', 'twenty-', 'thirty-', 'fourty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'];

        var noDecimals = function(number){
            return Math.floor(number);
        }
        var noSpaces = function(number){
            var noSpace = number.replace(" ","");
            return noSpace;
        }

        var noCommas = function(number){
            var noComma = number.replace(",","");
            return noComma;
        }

        var singleDigit = function(number) {
            return ones[number];
        }

        var arrayify = function(number) {
            var stringNum = number.toString();
            var arrayOfNums = stringNum.split("");
            var length = arrayOfNums.length;
            for(var i=0; i<length; i++) { arrayOfNums[i] = +arrayOfNums[i]; }
            return arrayOfNums;
        }

        var chugNumbers = function(number) {
            var arrayOfNums = arrayify(number);
            var length =  arrayOfNums.length;
            while (length > 0) {
                return(arrayOfNums[1]);
            }
        }
module.exports = {
    arrayify : arrayify,
    chugNumbers : chugNumbers,
    singleDigit : singleDigit, 
    noCommas : noCommas,
    noSpaces : noSpaces,
    noDecimals: noDecimals
}
// exports.noDecimals = function(number){
//     return Math.floor(number);
// }

