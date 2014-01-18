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
	  	it ('should return three-digit slice of array', function(){
	  		console.log(umpteen.sliceArray(number123));
	  		should.deepEqual(["one", "twenty-", "three"], umpteen.sliceArray(number123))
	  	})	  	
	  	var number5678 = 5678;
	  	it ('should return three-digit slice of array', function(){
	  		console.log(umpteen.sliceArray(number5678));
	  		should.deepEqual([8,7,6,5], umpteen.sliceArray(number5678))
	  	})		  	
	  	var reallyLongNumber = 10000000000000;
	  	it('should reject too-long numbers', function(){
	  	  should.equal("Sorry, nine trillion is as high as we go!", umpteen.checkLength(reallyLongNumber));
	  	})
	})
})


