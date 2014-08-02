//here's the written-out numbers
var oneToNineteen = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = [' ', 'ten', 'twenty-', 'thirty-', 'forty-', 'fifty-', 'sixty-', 'seventy-', 'eighty-', 'ninety-'];
    ones = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    powers = ['', 'hundred', ' thousand,', ' million,', ' billion,', ' trillion,', ' quadrillion,', ' quintillion,', ' sextillion,'];

// we don't mess with no decimals

var umpteenNumber = function(number) {
    return {
       myNumber : this.number,
        onlyDigits :  function(myNumber){    
            var exp = /[^\d]/ig;
            myNumber = myNumber.replace(exp,"");
            // console.log(myNumber);
            return myNumber;
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
        noDecimalsString : function(myNumber){
            myNumber = myNumber.split(".", 1);
            return myNumber[0];
        }
    }
}

// some numbers are just too big for javascript
var checkTypeAndLength = function(number) {
    if ((typeof (number) == 'number') && number >= 9007199254740992) { 
        return new Error("Sorry, number too big. Blame Javascript!");   
    } else if (typeof (number) == 'number'){
        return (umpteenNumber().noDecimals(number));
    } else if (typeof (number) == 'string') {
        var tempNum = umpteenNumber().noDecimalsString(number);
        return(umpteenNumber().onlyDigits(tempNum));
    }

}

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

//turn number into an array
var arrayify = function(number) {
    // console.log("here's the " + number);
    // console.log(number + " ");
    var stringNum = number.toString();
    // console.log("here's the string " + stringNum);
    var arrayOfNums = stringNum.split("");
    var length = arrayOfNums.length;
    for(var i=0; i<length; i++) { arrayOfNums[i] = +arrayOfNums[i]; }
    return arrayOfNums;
}



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


var phrasify = function(myNumber) {    
    function isNotEmpty(element) {
      return element !== " ";
    }
    var arrayNum = [];
    var arrayNum = myNumber;
    console.log("here's the input to phrasify: " + myNumber)
    console.log(typeof(myNumber));
    var phrasifiedNums = arrayNum.filter(isNotEmpty);


    console.log("here's the array: " + phrasifiedNums);
    var numPhrase = phrasifiedNums.join(" ");
    var noSpaces = numPhrase.replace(/  /, " ");
    var fixHyphens = noSpaces.replace(/- /gi, "-");
    var fixTerminalHyphens = fixHyphens.replace(/- /gi, " ");
    var extraneousAnds = fixTerminalHyphens.replace(/and$/, "");
    var finalPhrase = extraneousAnds;
    console.log(finalPhrase);
    return finalPhrase;
}


var checkZero = function(number) {
    // console.log(number);
    newNumber = parseInt(number, 10);
    // console.log(newNumber);
    if (newNumber === 0) {
        //returning array here 
        return ["zero"]; 
    }
    else {
        //returning the original number 
        return number;
    }
}

var finalFunction = function(number) {
    var numObj = new UmpteenNumber(number);
    var spelledNum = [];
    var resultPhrase = {};
    // console.log("here's the number passed in " + number);
    // console.log(typeof(number));
    
    var digitsOnlyNumber = UmpteenNumber.onlyDigits(number);
    var myNumber = checkLength(UmpteenNumber.digitsOnlyNumber);
    if (typeof myNumber == 'object') {
        // console.log("here's myNumber: " + myNumber);
        resultPhrase.myNumber = myNumber;
        return(myNumber);
    }
    else {
        // console.log("here's myNumber again: " + myNumber);
        var spelledNum = spellItOut(myNumber);
        // console.log("here's the spelledNum: " + spelledNum);
        resultPhrase.myNumber = spelledNum;
        // console.log(resultPhrase);
        return spelledNum;
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

