var oneToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = ['', 'ten', 'twenty-', 'thirty-', 'fourty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'];
    ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

        var noDecimals = function(number){
            return Math.floor(number);
        }

        var onlyDigits = function(number){
            var stringNum = number.toString();
            var exp = /[^\d]/ig;
            var justDigits = stringNum.replace(exp,"");
            return justDigits;
        }

        var underTwenty = function(number) {
            return oneToNineteen[number];
        }

        var underHundred = function(number) {
            return tens[number];
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

        var checkLength = function(number) {
            var myNumArray = arrayify(number);
            if (myNumArray.length > 13) {
                return("Sorry, nine trillion is as high as we go!");
            }
        }

        var chugNumbers = function(number) {
            var spelledNums = [];
            var arrayOfNums = arrayify(number);
            var backwardsArrayOfNums = arrayOfNums.reverse();
            var length = arrayOfNums.length;
             if ((backwardsArrayOfNums[1] !== undefined) && (backwardsArrayOfNums[1] === 1)){ 
                    var teenNum = backwardsArrayOfNums[1].toString() + backwardsArrayOfNums[0].toString();
                    spelledNums.push(underTwenty(+teenNum));
                    
              }
             else {
                // onesPlace = backwardsArrayOfNums[0];
                spelledNums.push(underTwenty(backwardsArrayOfNums[0]));
                spelledNums.push(underHundred(backwardsArrayOfNums[1]));
             } 
          return spelledNums;

        }

    var sliceArray = function(number) {
            var spelledNums = [];
            var tempNums = [];
            var arrayOfNums = arrayify(number);
            // var backwardsArrayOfNums = arrayOfNums.reverse();
            // var length = backwardsArrayOfNums.length;
             

    //okay, next bit is to check for undefined for tempNums[i], maybe ternary operator here? 
          while (arrayOfNums.length > 0) {
              for(var i=0; i<3; i++)  {
                tempNums[i] = arrayOfNums.pop();
            }

              if ((tempNums[1] !== undefined) && (tempNums[1] === 1)){ 
                    var teenNum = tempNums[1].toString() + tempNums[0].toString();
                    spelledNums.push(underTwenty(+teenNum));
                    
              }
             else {
                spelledNums.push(underTwenty(tempNums[0]));
                spelledNums.push(underHundred(tempNums[1]));
             } 
             if (tempNums[2] !== undefined) {
                spelledNums.push(singleDigit(tempNums[2]));
             }
            }
            return spelledNums.reverse();

        }

module.exports = {
    arrayify : arrayify,
    chugNumbers : chugNumbers,
    underTwenty: underTwenty,
    noDecimals: noDecimals,
    onlyDigits: onlyDigits,
    checkLength: checkLength,
    singleDigit: singleDigit,
    underHundred: underHundred,
    sliceArray: sliceArray
}
// exports.noDecimals = function(number){
//     return Math.floor(number);
// }

