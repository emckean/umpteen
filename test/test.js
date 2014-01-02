var assert = require('assert'),
	should = require('should'),
	umpteen = require('../umpteen.js');

describe('checking', function(){
	describe('simpleCheck', function(){
	  	var number1 = 1;
	    it('should return "one"', function(){
	      should.equal("one", umpteen.singleDigit(number1));
		})
		var number2 = 2;
	    it('should return "two"', function(){
	      should.equal("two", umpteen.singleDigit(number2));
		})
		var numberDecimal1 = 3.14;
	    it('should return a simple number for a decimal', function(){
	      should.equal(3, umpteen.noDecimals(numberDecimal1));
		})
	    var numberSpaces = '3 3';
	    it('should return a number without spaces', function(){
	      should.equal(33, umpteen.noSpaces(numberSpaces));
		})
		var numberCommas = '3,003';
	    it('should return a number without commas', function(){
	      should.equal(3003, umpteen.noCommas(numberCommas));
		})
		var numberForArray = 30003;
	    it('should return an array', function(){
	      should.deepEqual([3,0,0,0,3], umpteen.arrayify(numberForArray));
		})
	})
})


