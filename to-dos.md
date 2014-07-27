to-do:
=======================
* check for too-long numbers
* test that shorter numbers are not instances of error 
* figure out the >17 digit thing
* use https://www.npmjs.org/package/big-integer to deal with numbers >1e+20 (toJSNumber())
* check for >1 decimal point
* check for non-digit, non-comma, non-decimal point characters
* strip leading and trailing spaces
* handle negative numbers?
* deal with zero case
* make tests run constantly
* check for string of all zeros
* what about leading zeros?
* don't forget to take out ALL THE CONSOLE.LOGS :)

Things to remember:
-----------------------
+ numeral.js
hey! ordinals from here:
function nth(o){return o+([‘st’,’nd’,’rd’][(o+’’).match(/1?\d\b/)-1]||’th’)}
https://medium.com/html5-css3/7c80a4b731f8

Checklist:
------------------------
* zero, leading zeros
* single numbers 1-9
* 10, 11, 12
* teens
* twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties
* one hundred and
* one thousand and
* ten thousand and
* one hundred thousand
* one million
* one billion
* one trillion ... 
* fix the wrapper module that takes in number and gives array output so that it's a single string
* for random testing, RAND a number between 0 and one trillion and log output, just for eyeball verify
* test in spellitout that number is an array, then do the joinyreplacy bits

Flow (arrayify : arrayify,
        // checkZero : checkZero,
        underTwenty: underTwenty,
        noDecimals: noDecimals,
        onlyDigits: onlyDigits,
        checkLength: checkLength,
        singleDigit: singleDigit,
        underHundred: underHundred,
        spellItOut: spellItOut,
        phrasify: phrasify,
        finalFunction : finalFunction)
---------------------------
-- pre-check (checkZero; checkLength; onlyDigits; noDecimals;)
-- when do I want integers and when strings?
√ check to make sure all digits
√ then delete decimals
√ then check length
-- what about a case statement that checks the tempnum[i]?
-- fix plain zero with special case
√ then create array (arrayify)
√ create spelled version (spellItOut)
√ remove empty array elements (phrasify)
-- fix "one thousand, zero hundred and"
-- figure out Object.prototype.toString
-- final wrapper function to chain everything (finalFunction => needs rename)

Possibilities
------------------------------
 nested.name.middle || '(none)', for handling zero?
 http://designpepper.com/blog/drips/storing-metadata-on-arrays-in-javascript.html
 can any of the functions be iifes? e.g. push array ?
 handle decimals? 
 var saveDecimals = function(number){
    var stringNum = number.toString();
    // console.log("here's the stringNum: " + stringNum);
    //decimal marker here is the ".", if you want it to be the comma, switch it here
    //we're throwing away the decimal here but I'm saving this to handle it in some future version
    //but remember to check that everything after the decimal point is also a number
    var lastTwo = /[\.]..*?$/;
    var findDecimal = stringNum.match(lastTwo);
    if (findDecimal != undefined) {
        var theThrownAwayDecimal = findDecimal[0];
    }
    var noDecimal = stringNum.replace(lastTwo,"");
    return([noDecimal, fin]);
}