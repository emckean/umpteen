to-do:
=======================
* check for too-long numbers
* use https://www.npmjs.org/package/big-integer to deal with numbers >1e+20 (toJSNumber())
* check for >1 decimal point
* check for non-digit, non-comma, non-decimal point characters
* strip leading and trailing spaces
* handle negative numbers?
* deal with zero case

Things to remember:
-----------------------
+ numeral.js
hey! ordinals from here:
function nth(o){return o+([‘st’,’nd’,’rd’][(o+’’).match(/1?\d\b/)-1]||’th’)}
https://medium.com/html5-css3/7c80a4b731f8

Checklist:
------------------------
* zero
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

Flow
---------------------------
√ check to make sure all digits
√ then delete decimals
√ then check length
-- fix plain zero with special case
-- then create array
-- create spelled version
-- remove empty array elements
-- fix "one thousand, zero hundred and"
-- figure out Object.prototype.toString
