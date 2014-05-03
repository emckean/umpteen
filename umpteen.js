//here's the written-out numbers
var oneToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = ['', 'ten', 'twenty-', 'thirty-', 'forty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'];
    ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    powers = ['', 'hundred', ' thousand,', ' million,', ' billion,', ' trillion,', ' quadrillion,', ' quintillion,'];

// we don't mess with no decimals
var noDecimals = function(number){
    return Math.floor(number);
}

// only digits 1-9 please
var onlyDigits = function(number){    
    var stringNum = number.toString();
    console.log("here's the stringNum: " + stringNum);
    //decimal marker here is the ".", if you want it to be the comma, switch it here
    //we're throwing away the decimal here but I'm saving this to handle it in some future version
    //but remember to check that everything after the decimal point is also a number
    var lastTwo = /[\.]..*?$/;
    var findDecimal = stringNum.match(lastTwo);
    console.log(findDecimal);
    if (findDecimal != undefined) {
        var theThrownAwayDecimal = findDecimal[0];
    }
    var noDecimal = stringNum.replace(lastTwo,"");
    console.log(noDecimal);
    var exp = /[^\d]/ig;
    var justDigits = noDecimal.replace(exp,"");
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

// var checkZero = function(number) {
//     if (number === 0) {
//         return "zero";
//     }
// }

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

var spellItOut = function (number) {
    //let's make some variables
    //what we return
    var spelledNums = [];
    //temporary array to count backwards by threes
    var tempNums = [];
    //create an array from the number string
    var arrayOfNums = arrayify(number);
    //get the length
    length = arrayOfNums.length;
    // make an array of arrays, counting from the end of the number = 123,456 = [[4,5,6], [1,2,3]]
    while (length > 0) {
        tempNums.push(arrayOfNums.splice(-3, 3));
        length = (length - 3);
    }
    console.log("here's tempNums: "  + tempNums);  
    tempNumlength = tempNums.length;  
    //okay let's look at each chunk one by one    
    for(var i=0; i<tempNumlength; i++) {
        //reverse it, because that way you know the relevant teen digit is always array[1]
        var miniArray = tempNums[i].reverse();
        console.log(miniArray);
        //check if the middle digit is a 1, in which case it's a "teen" number
        if ((miniArray[1] === 1)) {
                var teenNum = (miniArray[1]).toString() + (miniArray[0]).toString();
                spelledNums.push(underTwenty(+teenNum));
                //push an empty element for every place
                spelledNums.push(' ');
                //now push the hundreds digit, if it's not undefined or 0
                if (miniArray[2]) {
                    spelledNums.push(singleDigit(miniArray[2]) + ' hundred and');
                }
                else {
                spelledNums.push(' ');
            }
        }
        // if it's not a 1 then
        else { 
            ////********* work here -- the powers add doesn't work if it's temp[0]
            if ((miniArray[0])){
                console.log("here's miniarray 0: " + miniArray[0]);
                spelledNums.push(underTwenty(miniArray[0]) + powers[i+1]);
                var ones = (underTwenty(miniArray[0]));
            }
            else {
                spelledNums.push(' ' + powers[i+1]);
            }
            if ((miniArray[1]) !== undefined){
                console.log("here's miniarray 1: " + miniArray[1]);
                spelledNums.push(underHundred(miniArray[1]));
                console.log(underHundred(miniArray[1]));
                var tens = (underHundred(miniArray[1]))
            } 
            else {
                spelledNums.push(' ');
            } 
            if (miniArray[2]){
                console.log("here's miniarray 2:" + miniArray[2]);
                spelledNums.push(singleDigit(miniArray[2]) + ' hundred and');     
                var hundreds = (singleDigit(miniArray[2]) + ' hundred and');     
            }
            else {
                spelledNums.push(' ');
            }
        }
    }
    //put things back in the right order
    var spelledArray = spelledNums.reverse();
    console.log(spelledArray);

    return(spelledArray);

}


var phrasify = function(number) { 
    // console.log("here is the input: " + number);
    function isNotEmpty(element) {
      return element !== "";
    }
    var phrasifiedNums = number.filter(isNotEmpty);
    // console.log("here's the array: " + phrasifiedNums);
    var numPhrase = phrasifiedNums.join(" ");
    var noSpaces = numPhrase.replace(/  /, " ");
    var fixHyphens = noSpaces.replace(/- /gi, "-");
    var fixTerminalHyphens = fixHyphens.replace(/-$/gi, "");
    var extraneousAnds = fixTerminalHyphens.replace(/and$/, "");
    var finalPhrase = extraneousAnds;
    return finalPhrase;
}

var finalFunction = function(number) {
    if (number === 0) {
        return "zero";
    }
    // var plainNumber = noDecimals(number);
    // console.log("here's the plainNumber " + plainNumber);
    var digitsOnlyNumber = onlyDigits(number);
    // console.log(digitsOnlyNumber);
    var myNumber = checkLength(digitsOnlyNumber);
    console.log(typeof(myNumber));
    if (typeof myNumber == 'object') {
        console.log("here's myNumber: " + myNumber);
        return(myNumber);
    }
    else {
        console.log("here's myNumber again: " + myNumber);
        var spelledNum = spellItOut(myNumber);
        console.log("here's the spelledNum: " + spelledNum);
        var finalResult = phrasify(spelledNum);
        return finalResult;
}
}

if (typeof module !== 'undefined') {
    module.exports = {
        arrayify : arrayify,
        // checkZero : checkZero,
        underTwenty: underTwenty,
        noDecimals: noDecimals,
        onlyDigits: onlyDigits,
        checkLength: checkLength,
        singleDigit: singleDigit,
        underHundred: underHundred,
        spellItOut: spellItOut,
        phrasify: phrasify,
        finalFunction : finalFunction
    }
}

