//here's the written-out numbers
var oneToNineteen = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = [' ', 'ten', 'twenty-', 'thirty-', 'forty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'];
    ones = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    powers = ['', 'hundred', ' thousand,', ' million,', ' billion,', ' trillion,', ' quadrillion,', ' quintillion,', ' sextillion,'];

// here's the little functions that pull from the arrays of numbers
var underTwenty = function(number) {
    return oneToNineteen[number];
}
var underHundred = function(number) {
    return tens[number];
}
var singleDigit = function(number) {
    return ones[number];
}   

// here's the object with functions that clean the number of non-digits and decimals
// could totally do this with standalone functions, just wanted to try this syntax
var umpteenNumber = function(number) {
    return {
       myNumber : this.number,
        onlyDigits :  function(myNumber){  
            if (typeof myNumber === 'string') {
                var exp = /[^\d]/ig;
                myNumber = myNumber.replace(exp,"");
            };
            if (myNumber !== "") {
                //stopped here -- why is .00009 not working
                console.log("here's the digits-only: " + myNumber);
                return myNumber;
            } else {
                console.log("here's the empty myNumber " + myNumber);
                return new Error("Sorry, please enter at least one digit.");
            };

        },
        noDecimals : function(myNumber){
            if (Math.floor(myNumber) === 0) { 
                // console.log(myNumber);
                return new Error("Sorry, number too small.");
                // console.log(typeOf(err));
                // throw err;  
            } else {
                myNumber = Math.floor(myNumber);
                return myNumber;
            }
        },
        //stopped here
        noDecimalsString : function(myNumber){
            myNumber = myNumber.split(".", 1);
            if (myNumber[0] !== "") {
                //stopped here -- why is .00009 not working
                console.log("here's the no decimal: " + myNumber[0]);
                return myNumber[0];
            } else {
                console.log(myNumber);
                return new Error("Sorry, number too small.");
            };
            
        }
    }
}

// this function does the checking for non-digits and too-big numbers
// this totally needs some refactoring, probably a case statement or split it out into separate functions
var checkTypeAndLength = function(input) {
    console.log("here's the length of the input " + input.length);
    if ((typeof (input) == 'number') && input >= 9007199254740992) { 
        return new Error("Sorry, number too big. Blame Javascript!");   
    } else if (typeof (input) == 'number'){
        //probably need to check this here for numbers with nothing to the left of the decimal point
        return (umpteenNumber().noDecimals(input).toString);
    } else if (typeof (input) == 'string') {
        var tempNum = umpteenNumber().noDecimalsString(input);
        console.log("here's the tempNum: " + tempNum);
        if (tempNum instanceof Error) {
            return (tempNum);
        } else if ((umpteenNumber().onlyDigits(tempNum).length > 16)) {
            return new Error("Sorry, I can't count that high!")
        } else {
            return(umpteenNumber().onlyDigits(tempNum));
            // return new Error("Sorry, I can't count that high!");
        } 
        }
    }


    
//turn number into an array
var arrayify = function(input) {
    if (typeof (input) == 'string'){
        var stringNum = input;
    }
    else {
        var stringNum = input.toString();
        console.log(typeof stringNum);
    }
    var arrayOfNums = stringNum.split("");
    var length = arrayOfNums.length;
    for(var i=0; i<length; i++) { arrayOfNums[i] = +arrayOfNums[i]; }
    return arrayOfNums;
}


// the main function that creates the array of words from number input
var spellItOut = function (number) {
    //let's make some variables
    //what we return
    var spelledNums = [];
    var spelledArray = [];
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
    // console.log("here's tempNums: "  + tempNums);  
    tempNumlength = tempNums.length;  
    //okay let's look at each chunk one by one    
    for(var i=0; i<tempNumlength; i++) {
        //reverse it, because that way you know the relevant teen digit is always array[1]
        var miniArray = tempNums[i].reverse();
        // console.log(miniArray);
        //check if the middle digit is a 1, in which case it's a "teen" number
        if ((miniArray[1] === 1)) {
                var teenNum = (miniArray[1]).toString() + (miniArray[0]).toString();
                if (i == 0) {
                    spelledNums.push(underTwenty(+teenNum));
                } else {
                    spelledNums.push(underTwenty(+teenNum) + powers[i+1]);
                }    
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
            if (miniArray[0] >= 0){
                // console.log("here's miniarray 0: " + miniArray[0]);
                if (i == 0) {
                    spelledNums.push(underTwenty(miniArray[0]));
                } else {
                    spelledNums.push(underTwenty(miniArray[0]) + powers[i+1]);
                    // console.log("here's " + i);
                }
            }
            if ((miniArray[1]) !== undefined){
                // console.log("here's miniarray 1: " + miniArray[1]);
                spelledNums.push(underHundred(miniArray[1]));
            } 
            else {
                spelledNums.push(' ');
            } 
            if (miniArray[2]){
                // console.log("here's miniarray 2:" + miniArray[2]);
                spelledNums.push(singleDigit(miniArray[2]) + ' hundred and');       
            }
            else {
                spelledNums.push(' ');
            }
        }
    }
    //put things back in the right order
    var spelledArray = spelledNums.reverse();
    // console.log("here's my spelled Array " + spelledArray);
    return(spelledArray);

}

//take the spellItOut array, and clean up extraneous elements
var phrasify = function(myNumber) {    
    function isNotEmpty(element) {
      return element !== " ";
    }
    var arrayNum = [];
    var arrayNum = myNumber;
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
    newNumber = parseInt(number, 10);
    if (newNumber === 0) {
        //returning array here 
        return ['zero']; 
    }
    else {
        //returning the original number 
        console.log(newNumber);
        return newNumber;
    }
}

var finalFunction = function(number) {
    var cleanNumber = checkTypeAndLength(number);
    console.log("here's the type : " + typeof cleanNumber);
    if (cleanNumber instanceof Error) {
        return (cleanNumber);
    }
    if (checkZero(cleanNumber) == 'zero') {
        return ('zero');
    } else {
        var noZeros = checkZero(cleanNumber);
        console.log("this number should have no leading " + noZeros);
        console.log(cleanNumber);
        wordArray = spellItOut(noZeros);
        console.log(wordArray);
        finalOutput = phrasify(wordArray);
        console.log(finalOutput);
        return (finalOutput);
    }
    
}

if (typeof module !== 'undefined') {
    module.exports = {
        umpteenNumber : umpteenNumber,
        arrayify : arrayify,
        checkZero : checkZero,
        underTwenty: underTwenty,
        checkTypeAndLength: checkTypeAndLength,
        singleDigit: singleDigit,
        underHundred: underHundred,
        spellItOut: spellItOut,
        phrasify: phrasify,
        finalFunction : finalFunction
    }
}

