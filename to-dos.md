to-do & random notes
=======================

Things I'd like to add
------------------------
* handling decimals
* handling numbers bigger than nine quadrillion, nine hundred and ninety-nine trillion, nine hundred and ninety-nine billion, nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine (sixteen nines)
* other stuff

Test coverage for coveralls
----------------------------
istanbul cover /usr/local/lib/node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info

Pretty-printing html to see lines not covered
-----------------------
istanbul cover /usr/local/lib/node_modules/mocha/bin/_mocha --report html -- -R spec && cat ./coverage/lcov.info