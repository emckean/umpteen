//here's the written-out numbers
var oneToNineteen = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = [' ', 'ten', 'twenty-', 'thirty-', 'forty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'],
    ones = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    powers = ['', 'hundred', ' thousand,', ' million,', ' billion,', ' trillion,', ' quadrillion,', ' quintillion,', ' sextillion,'];

// here's the little functions that pull from the arrays of numbers
var underTwenty = function (number) {
    return oneToNineteen[number];
}
var underHundred = function (number) {
    return tens[number];
}
var singleDigit = function (number) {
    return ones[number];
}   

// here's the object with functions that clean the number of non-digits and decimals
// could totally do this with standalone functions, just wanted to try this syntax
var umpteenNumber = function (number) {
    return {
       myNumber : this.number,
        onlyDigits :  function(myNumber){  
            if (typeof myNumber === 'string') {
                var exp = /[^\d]/ig;
                myNumber = myNumber.replace(exp,"");
            }
            if (myNumber !== "") {
                return myNumber;
            } else {
                return new Error("Sorry, please enter at least one digit.");
            }

        },
        noDecimals : function (myNumber){
            if (Math.floor(myNumber) === 0) { 
                return new Error("Sorry, number too small.");
            } else {
                myNumber = Math.floor(myNumber);
                return myNumber;
            }
        },
        noDecimalsString : function (myNumber){
            myNumber = myNumber.split(".", 1);
            if (myNumber[0] !== "") {
                return myNumber[0];
            } else {
                return new Error("Sorry, number too small.");
            }
            
        }
    }
}

// this function does the checking for non-digits and too-big numbers
// this totally needs some refactoring, probably a case statement or split it out into separate functions
var checkTypeAndLength = function (input) {
    if ((typeof (input) == 'number') && input >= 9007199254740992) { 
        return new Error("Sorry, number too big. Blame Javascript!");   
    } else if (typeof (input) == 'number'){
        return (umpteenNumber().noDecimals(input).toString);
    } else if (typeof (input) == 'string') {
        var tempNum = umpteenNumber().noDecimalsString(input);
        if (tempNum instanceof Error) {
            return (tempNum);
        } else if ((umpteenNumber().onlyDigits(tempNum).length > 16)) {
            return new Error("Sorry, I can't count that high!")
        } else {
            return(umpteenNumber().onlyDigits(tempNum));
        } 
        }
    }


    
//turn number into an array
var arrayify = function(input) {
    var stringNum;
    if (typeof (input) == 'string'){
        stringNum = input;
    }
    else {
        stringNum = input.toString();
    }
    var arrayOfNums = stringNum.split("");
    var length = arrayOfNums.length;
    for(var i=0; i<length; i++) { arrayOfNums[i] = +arrayOfNums[i]; }
    return arrayOfNums;
}


// the main function that creates the array of words from number input
var spellItOut = function (number) {
    //let's make some variables
    var spelledNums = [];
   //what we return
    var spelledArray = [];
    //tempNums is a temporary array to count backwards by threes
    var tempNums = [];
    //create an array from the number string
    var arrayOfNums = arrayify(number);
    //get the length
    var myLength = arrayOfNums.length;
    // make an array of arrays, counting from the end of the number = 123,456 = [[4,5,6], [1,2,3]]
    while (myLength > 0) {
        tempNums.push(arrayOfNums.splice(-3, 3));
        myLength = (myLength - 3);
    }
    var tempNumlength = tempNums.length;  
    //okay let's look at each chunk one by one    
    for(var i=0; i<tempNumlength; i++) {
        //reverse it, because that way you know the relevant teen digit is always array[1]
        var miniArray = tempNums[i].reverse();
        //check if the middle digit is a 1, in which case it's a "teen" number
        if ((miniArray[1] === 1)) {
                var teenNum = (miniArray[1]).toString() + (miniArray[0]).toString();
                if (i === 0) {
                    spelledNums.push(underTwenty(+teenNum));
                } else {
                    spelledNums.push(underTwenty(+teenNum) + powers[i+1]);
                }    
                // push an empty element for every place just to keep things tidy
                spelledNums.push(' ');
                spelledNums.push(' ');
        }
        // if it's not a 1 then
        else { 
            if (miniArray[0] >= 0){
                if (i === 0) {
                    spelledNums.push(underTwenty(miniArray[0]));
                } else {
                    spelledNums.push(underTwenty(miniArray[0]) + powers[i+1]);
                }
            }
            if ((miniArray[1]) !== undefined){
                spelledNums.push(underHundred(miniArray[1]));
            } 
            else {
                spelledNums.push(' ');
            } 
            if (miniArray[2]){
                spelledNums.push(singleDigit(miniArray[2]) + ' hundred and');       
            }
            else {
                spelledNums.push(' ');
            }
        }
    }
    //put things back in the right order
    spelledArray = spelledNums.reverse();
    return(spelledArray);

}

//take the spellItOut array, and clean up extraneous elements
var phrasify = function(myNumber) {    
    function isNotEmpty(element) {
      return element !== " ";
    }
    var arrayNum = [];
    arrayNum = myNumber;
    //make sure it's not empty
    var phrasifiedNums = arrayNum.filter(isNotEmpty);
    // turn it into one string
    var numPhrase = phrasifiedNums.join(" ");
    //take out spaces
    var noSpaces = numPhrase.replace(/  /, " ");
    //clean up hyphens
    var fixHyphens = noSpaces.replace(/- /gi, "-");
    //remove unnecessary terminal hyphens
    var fixTerminalHyphens = fixHyphens.replace(/- /gi, " ");
    //take out unnecessary ands
    var extraneousAnds = fixTerminalHyphens.replace(/and$/, "");
    // returning new variable just in case I think of anything else to clean
    var finalPhrase = extraneousAnds;
    return finalPhrase;
}

// let's treat zero as a special case
var checkZero = function(number) {
    var newNumber = parseInt(number, 10);
    if (newNumber === 0) {
        //returning array here 
        return ['zero']; 
    }
    else {
        //returning the original number 
        return newNumber;
    }
}

// let's check for negative numbers
var checkNegative = function(number) {
    var negExpr = /^-/;
    if (negExpr.test(number)) {
        //returning array here 
        return('negative '); 
    }
    else {
        return('');
    }
}

var finalFunction = function(number) {
    //clean input
    var cleanNumber = checkTypeAndLength(number);
    if (cleanNumber instanceof Error) {
        return (cleanNumber);
    }
    //check for negative case
    var negative = checkNegative(number);
    //check for zero special case
    if (checkZero(cleanNumber) == 'zero') {
        return ('zero');
    } else {
        //get the non-zero output of cleanNumber
        var noZeros = checkZero(cleanNumber);
        //get the array of number words
        var wordArray = spellItOut(noZeros);
        //make it into a pretty phrase
        var phrasedResult = phrasify(wordArray);
        // add the output of the negative check above
        var finalOutput = negative + phrasedResult;
        //return it
        return (finalOutput);
    }
    
}

if (typeof module !== 'undefined') {
    module.exports = {
        umpteenNumber : umpteenNumber,
        arrayify : arrayify,
        checkZero : checkZero,
        checkNegative : checkNegative,
        underTwenty: underTwenty,
        checkTypeAndLength: checkTypeAndLength,
        singleDigit: singleDigit,
        underHundred: underHundred,
        spellItOut: spellItOut,
        phrasify: phrasify,
        finalFunction : finalFunction
    }
}

