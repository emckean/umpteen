[![Build Status](https://travis-ci.org/emckean/umpteen.png?branch=master)](https://travis-ci.org/emckean/umpteen)

What's Umpteen?
===================

Umpteen is a little npm module to help you spell out numbers in words.

UMPTEEN IS CURRENTLY UNDER DEVELOPMENT. Still in the "write a bunch of tests" phase. I'm workin' on it as fast as I can. :-) 

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
Command-Line?
-------------
To test this module on the command line, try this: 
1. in a new directory, 
```
npm install umpteen 
```
2. Create a SpellItOut.js file with these lines: 
```
#!/usr/bin/env node

var spellIt = require('umpteen');

var input = parseInt(process.argv[2], 10);
console.log(spellIt.spellItOut(input));
```
3. from the command line, type: 
```
node SpellItOut 77
```
4. You should see this returned:
```
"seventy-seven"
```

Thanks and acknowledgements
===========================
Umpteen was inspired by Landon Curt Noll's print-the-numbers perl script, which is way better and fuller-featured than this module. You should check it out: http://www.isthe.com/chongo/tech/math/number/number

If you don't like this implementation, or you need to spell out numbers in French or Danish, try this module by jmosbech (https://github.com/jmosbech): https://www.npmjs.org/package/spell-it

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