[![Build Status](https://travis-ci.org/emckean/umpteen.png?branch=master)](https://travis-ci.org/emckean/umpteen)
[![Coverage Status](https://img.shields.io/coveralls/emckean/umpteen.svg)](https://coveralls.io/r/emckean/umpteen?branch=master)
[![Package Quality](http://npm.packagequality.com/badge/umpteen.png)]

What's Umpteen?
===================

Umpteen is a little npm module to help you spell out numbers in words.

* 99 = ninety-nine
* 99.99 = ninety-nine (umpteen discards anything after the decimal point)
* 108 = one hundred and eight
* 89,828,374,987 = eighty-nine billion, eight hundred and twenty-eight million, three hundred and seventy-four thousand, nine hundred and eighty-seven
* 9,999,999,999,999,999 = nine quadrillion, nine hundred and ninety-nine trillion, nine hundred and ninety-nine billion, nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine

Assumptions
------------

Umpteen expects string input but will try to deal with number input as well, up to but not including 9007199254740992, which is the biggest number Javascript will nicely turn into a string. 

Umpteen currently handles numbers up to 16 digits long.

Why Umpteen?
===================
Why not?
Also: words > numbers.

Using Umpteen
===================
Testing
-------
Run tests with mocha. Tests are in the /test directory. 
```
mocha /test/test.js
```
or
```
npm test
```
A Note on Formatting
--------------------
Umpteen handles numbers written in US-style notation: 6,543.21. (Except that it throws away everything after the decimal point.)
If you'd like to use Euro-style numbers, you can fork this & look for the comments, I've marked where the "." delimiter is shown (//HEY DELIMITERS HERE). Please feel free to send me a pull request if you can figure out how to handle both instances nicely. 

A Note on Names for Numbers
---------------------
Umpteen uses the "short scale" for deciding when to start using the term "billion" (i.e., a billion is a thousand millions). More info here: http://en.wikipedia.org/wiki/Long_and_short_scales

Command-Line?
-------------
To test this module on the command line, try this: 

1. in a new directory, 

  ```
  npm install umpteen 
  ```
2. Create a spellItOut.js file with these lines: 

  ```
  #!/usr/bin/env node
  var spellIt = require('umpteen');
  var input = process.argv[2];
  console.log(spellIt.spellItOut(input));
  ```
3. from the command line, type: 

  ```
  node spellItOut 77
  ```
4. You should see this returned:

  ```
  "seventy-seven"
  ```

Dependencies?
---------------------------
Umpteen has no runtime dependencies. To run the tests, you'll need:

* mocha
* should

For checking test coverage and getting that nice little badge at the top, I used:

* istabul
* coveralls


Thanks and acknowledgements
===========================
Umpteen was inspired by Landon Curt Noll's print-the-numbers perl script, which is way better and fuller-featured than this module. You should check it out: http://www.isthe.com/chongo/tech/math/number/number

If you don't like this implementation, or you need to spell out numbers in French or Danish, try this module by jmosbech (https://github.com/jmosbech): https://www.npmjs.org/package/spell-it

Thanks also to casualjim (https://github.com/casualjim) for helping me figure out how to see my test coverage.

License
========
Umpteen is made available under the MIT software license (http://opensource.org/licenses/MIT)

The MIT License (MIT)

Copyright (c) 2014 Erin McKean

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included inall copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
