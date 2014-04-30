//here's the written-out numbers
var oneToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = ['', 'ten', 'twenty-', 'thirty-', 'forty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'];
    ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    powers = ['', ' thousand,', ' million,', ' billion,', ' trillion,', ' quadrillion,', ' quintillion,'];

// we don't mess with no decimals
var noDecimals = function(number){
    return Math.floor(number);
}

// only digits 1-9 please
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

// redo this for septillion
var checkLength = function(number) {
    if (number >= 1e+21) { 
    return new Error("Sorry, number too big.");   
    // var myNumArray = arrayify(number);
    // console.log("hey, here's the array " + myNumArray);
    // if (myNumArray.length > 25) {
    // return("Sorry, one hundred quintillion is as high as we go!");
    } else {
        return(number);
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
        spelledNums.push(underTwenty(backwardsArrayOfNums[0]));
        spelledNums.push(underHundred(backwardsArrayOfNums[1]));
    } 
    return spelledNums;
}

    var spellItOut = function(number) {

        var spelledNums = [];
        var tempNums = [];
        var arrayOfNums = arrayify(number);
        length = arrayOfNums.length;
        while (length > 0) {
            tempNums.push(arrayOfNums.splice(-3, 3));
            length = (length - 3);
        }
        tempNumlength = tempNums.length;        
        for(var i=0; i<tempNumlength; i++) {
            var miniArray = tempNums[i].reverse();
            if (((miniArray[1]) !== undefined) && (miniArray[1] === 1)){ 
                    var teenNum = (miniArray[1]).toString() + (miniArray[0]).toString();
                    spelledNums.push(underTwenty(+teenNum));
                    
              }
             else {
                if ((miniArray[0]) !== undefined){
                    spelledNums.push(underTwenty(miniArray[0]) + powers[i])
                };
               if ((miniArray[1]) !== undefined){
                    spelledNums.push(underHundred(miniArray[1]))
                };
             } 
             if ((miniArray[2]) !== undefined){
                spelledNums.push(singleDigit(miniArray[2]) + ' hundred and')
            };
        }
        // var hyphens = /-  ?/;
        // return spelledNums.reverse().join(" ").replace(hyphens, "-", "gi");
        return spelledNums.reverse();
    }

var phrasify = function(number) { 
    var phrasifiedNums = number;
    numPhrase = phrasifiedNums.join(" ");
    noSpaces = numPhrase.replace(/  /, " ");
    fixHyphens = noSpaces.replace(/- /, "-");
    finalPhrase = fixHyphens.replace(/- $/, "");
    return finalPhrase;
}

var finalFunction = function(number) {
    var myNumber = checkLength(number);
    
}

if (typeof module !== 'undefined') {
    module.exports = {
        arrayify : arrayify,
        chugNumbers : chugNumbers,
        underTwenty: underTwenty,
        noDecimals: noDecimals,
        onlyDigits: onlyDigits,
        checkLength: checkLength,
        singleDigit: singleDigit,
        underHundred: underHundred,
        spellItOut: spellItOut,
        phrasify: phrasify
    }
}

