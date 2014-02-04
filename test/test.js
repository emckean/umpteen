var assert = require('assert'),
	should = require('should'),
	umpteen = require('../umpteen.js');

describe('checking', function(){
	describe('simpleCheck', function(){
	  	var number1 = 1;
	    it('should return "one"', function(){
	      should.equal("one", umpteen.underTwenty(number1));
		})
		var number2 = 2;
	    it('should return "two"', function(){
	      should.equal("two", umpteen.underTwenty(number2));
		})
		var numberDecimal1 = 3.14;
	    it('should return a simple number for a decimal', function(){
	      should.equal(3, umpteen.noDecimals(numberDecimal1));
		})
	    var numberSpaces = '3 3';
	    it('should return a number without spaces', function(){
	      should.equal(33, umpteen.onlyDigits(numberSpaces));
		})
	    var leadingNumberSpaces = ' 3 3';
	    it('should return a number without spaces', function(){
	      should.equal(33, umpteen.onlyDigits(numberSpaces));
		})
		var numberCommas = '3,003';
	    it('should return a number without commas', function(){
	      should.equal(3003, umpteen.onlyDigits(numberCommas));
		})
		var numberWithJunk = '9a*&^(*(&^8$$$';
		it('should return just a number with no letters or symbols', function(){
			should.equal(98, umpteen.onlyDigits(numberWithJunk));
		})
		var numberForArray = 30003;
	    it('should return an array', function(){
	      should.deepEqual([3,0,0,0,3], umpteen.arrayify(numberForArray));
		})
		var number19 = 19;
	    it('checking chugNumbers', function(){
	    	console.log(umpteen.chugNumbers(number19));
	      should.equal("nineteen", umpteen.chugNumbers(number19));
	  	})
	  	var testNumber19 = 19;
	  	it ('should return teen numbers', function(){
	  		should.equal("nineteen", umpteen.underTwenty(testNumber19))
	  	})
	  	var number33 = 33;
	  	it ('should return thirty-three from 33', function(){
	  		console.log(umpteen.chugNumbers(number33));
	  		should.deepEqual(['three', 'thirty-'], umpteen.chugNumbers(number33))
	  	})
	  	var number123 = 123;
	  	it ('should spell out a three-digit number', function(){
	  		console.log(umpteen.spellItOut(number123));
	  		should.deepEqual(["one hundred and", "twenty-", "three"], umpteen.spellItOut(number123))
	  	})	  	
	  	var number5678 = 5678;
	  	it ('should spell out a four-digit number', function(){
	  		console.log(umpteen.spellItOut(number5678));
	  		should.deepEqual(["five thousand", "six hundred and", "seventy-", "eight"], umpteen.spellItOut(number5678))
	  	})		
	  	var number56789 = 56789;
	  	it ('should spell out a five-digit number', function(){
	  		console.log(umpteen.spellItOut(number56789));
	  		should.deepEqual(["fifty-", "six thousand", "seven hundred and", "eighty-", "nine"], umpteen.spellItOut(number56789))
	  	})		
	  	var number456789 = 456789;
	  	it ('should spell out a six digit number', function(){
	  		console.log(umpteen.spellItOut(number456789));
	  		should.deepEqual(["four hundred and", "fifty-", "six thousand", "seven hundred and", "eighty-", "nine"], umpteen.spellItOut(number456789))
	  	})	  	
	  	var number3456789 = 3456789;
	  	it ('should spell out a seven-digit number ', function(){
	  		console.log(umpteen.spellItOut(number3456789));
	  		should.deepEqual(["three million", "four hundred and", "fifty-", "six thousand", "seven hundred and", "eighty-", "nine"], umpteen.spellItOut(number3456789))
	  	})	 
	  	// var number102 = 102;
	  	// it ('should include an AND when there is a zero in the tens place', function(){
	  	// 	console.log(umpteen.spellItOut(number102));
	  	// 	should.deepEqual(["one hundred", " and ", "two"], umpteen.andify(number102))
	  	// }) 	
	  	// var number508102 = 508102;
	  	// it ('should include an AND when there is a zero in the tens place', function(){
	  	// 	console.log(umpteen.spellItOut(number508102));
	  	// 	should.deepEqual(["five hundred", " and ", "eight thousand", "one hundred", " and ", "two"], umpteen.andify(number508102))
	  	// }) 	
	  	var number204888270 = 204888270;
	  	it ('should spell out a number with a final zero', function(){
	  		console.log(umpteen.spellItOut(number204888270));
	  		should.equal("two hundred and four million, eight hundred and eighty-eight thousand, two hundred and seventy", umpteen.phrasify(number204888270))
	  	}) 	
	  	var reallyLongNumber = 10000000000000;
	  	it('should reject too-long numbers', function(){
	  	  should.equal("Sorry, nine trillion is as high as we go!", umpteen.checkLength(reallyLongNumber));
	  	})
	})
})


