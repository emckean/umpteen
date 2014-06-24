var assert = require('assert'),
	should = require('should'),
	umpteen = require('../umpteen.js');

	describe('checking length', function(){
	  	// test the javascript big number thing
	  	var number9007199254740993 = 9007199254740993;
	  	it ('should reject numbers bigger than JS likes ', function(){
	  		var checkedNumber = umpteen.checkLength(number9007199254740993);
		  	checkedNumber.should.be.an.instanceof(Error);
	  	})
	  	var number9007199254740992 = 9007199254740992;
	  	it ('should reject numbers bigger than JS likes, take 2 ', function(){
	  		var checkedNumber = umpteen.checkLength(number9007199254740992);
		  	checkedNumber.should.be.an.instanceof(Error);
	  	})
	  	var numberShort = 1;
	  	it ('should NOT reject numbers that are not bigger than JS likes ', function(){
	  		var checkedNumber = umpteen.checkLength(numberShort);
		  	checkedNumber.should.not.be.an.instanceof(Error);
	  	})
	  	//probably should make sure that shorter numbers are NOT instances of Error here
	}
		)
	describe('remove decimals', function(){
		var numberDecimal1 = 3.14;
	    it('should return a simple number for a decimal', function(){
	      should.equal(3, umpteen.noDecimals(numberDecimal1));
		})
		var numberOnlyDecimals = .14;
	    it('should return an error if only decimals', function(){
	    	var LessThanZero = umpteen.noDecimals(numberOnlyDecimals);
		    LessThanZero.should.be.an.instanceof(Error);
		})

	})
	describe('remove spaces', function(){
	    var numberSpaces = '3 3';
	    it('should return a number without internal spaces', function(){
	      should.equal(33, umpteen.onlyDigits(numberSpaces));
		})
		var leadingNumberSpaces = ' 33';
	    it('should return a number without leading spaces', function(){
	      should.equal(33, umpteen.onlyDigits(leadingNumberSpaces));
		})
		var trailingNumberSpaces = '33 ';
	    it('should return a number without trailing spaces', function(){
	      should.equal(33, umpteen.onlyDigits(trailingNumberSpaces));
		})
	})
	describe('removing commas and other characters', function(){    
		var numberCommas = '3,003';
	    it('should return a number without commas', function(){
	      should.equal(3003, umpteen.onlyDigits(numberCommas));
		})
		var numberWithJunk = '9a*&^(*(&^8$$$';
		it('should return just a number with no letters or symbols', function(){
			should.equal(98, umpteen.onlyDigits(numberWithJunk));
		})
	})
	describe('does it array?', function(){  	
		var numberForArray = 30003;
	    it('should return an array', function(){
	      should.deepEqual([3,0,0,0,3], umpteen.arrayify(numberForArray));
		})
	})
	describe('number test cases', function(){
		var testNumber3 = 3;
	  	it ('should return an array for single-digit numbers', function(){
	  		should.deepEqual([" ", " ", "three"], umpteen.spellItOut(testNumber3))
	  	})
	  	var testNumber12 = 12;
	  	it ('should return an array for teen numbers', function(){
	  		should.deepEqual([" ", " ", "twelve"], umpteen.spellItOut(testNumber12))
	  	})
	  	var number123 = 123;
	  	it ('should return an array for a three-digit number', function(){
	  		// console.log(umpteen.spellItOut(number123));
	  		should.deepEqual(["one hundred and", "twenty-", "three"], umpteen.spellItOut(number123))
	  	})	  
	  	var number204 = 204;
	  	it ('should return an array for three-digit number with a middle zero', function(){
	  		// console.log(umpteen.spellItOut(number204));
	  		should.deepEqual(["two hundred and", " ", "four"], umpteen.spellItOut(number204))
	  	})
	  	var number240 = 240;
	  	it ('should return an array for three-digit number with a final zero', function(){
	  		console.log(umpteen.spellItOut(number240));
	  		should.deepEqual(["two hundred and", "forty-", " "], umpteen.spellItOut(number240))
	  	})	
	  	var number1234 = 1234;
	  	it ('should return an array for a four-digit number', function(){
	  		// console.log(umpteen.spellItOut(number1234));
	  		should.deepEqual([" ", " ", "one thousand,", "two hundred and", "thirty-", "four"], umpteen.spellItOut(number1234))
	  	})  		
	  	var number1024 = 1024;
	  	it ('should return an array for a four-digit number with a zero in the hundreds place', function(){
	  		console.log(umpteen.spellItOut(number1024));
	  		should.deepEqual([" ", " ", "one thousand,", " ", "twenty-", "four"], umpteen.spellItOut(number1024))
	  	})	
	  	var number1204 = 1204;
	  	it ('should return an array for a four-digit number with a zero in the tens place', function(){
	  		console.log(umpteen.spellItOut(number1204));
	  		should.deepEqual([" ", " ", "one thousand,", "two hundred and", " ", "four"], umpteen.spellItOut(number1204))
	  	})	
	  	var number12345 = 12345;
	  	it ('should spell out a five-digit number', function(){
	  		console.log(umpteen.spellItOut(number12345));
	  		should.deepEqual([" ", " ", "twelve thousand,", "three hundred and", "forty-", "five"], umpteen.spellItOut(number12345))
	  	})	
	  	var number120456 = 120456;
	  	it ('should return an array for a five-digit number with a zero in the thousands place', function(){
	  		console.log(umpteen.spellItOut(number120456));
	  		should.deepEqual([ "one hundred and", "twenty-", "  thousand,", "four hundred and", "fifty-", "six"], umpteen.spellItOut(number120456))
	  	})	
	  	var number123456 = 123456;
	  	it ('should spell out a six digit number', function(){
	  		console.log(umpteen.spellItOut(number123456));
	  		should.deepEqual(["one hundred and", "twenty-", "three thousand,", "four hundred and", "fifty-", "six"], umpteen.spellItOut(number123456))
	  	})	  	
	  	var number3456789 = 3456789;
	  	it ('should spell out a seven-digit number ', function(){
	  		console.log(umpteen.spellItOut(number3456789));
	  		should.deepEqual([" ", " ", "three million,", "four hundred and", "fifty-", "six thousand,", "seven hundred and", "eighty-", "nine"], umpteen.spellItOut(number3456789))
	  	})	 
	  	var number12345678 = 12345678;
	  	it ('should spell out a eight-digit number ', function(){
	  		console.log(umpteen.spellItOut(number12345678));
	  		should.deepEqual([" ", " ", "twelve million,", "three hundred and", "forty-", "five thousand,", "six hundred and", "seventy-", "eight"], umpteen.spellItOut(number12345678))
	  	})	
	  	var number123456789 = 123456789;
	  	it ('should spell out a nine-digit number ', function(){
	  		console.log(umpteen.spellItOut(number123456789));
	  		should.deepEqual(["one hundred and", "twenty-", "three million,", "four hundred and", "fifty-", "six thousand,", "seven hundred and", "eighty-", "nine"], umpteen.spellItOut(number123456789))
	  	})		
	  	var number1234567890 = 1234567890;
	  	it ('should spell out a ten-digit number ', function(){
	  		console.log(umpteen.spellItOut(number1234567890));
	  		should.deepEqual([" ", " ", "one billion,", "two hundred and", "thirty-", "four million,", "five hundred and", "sixty-", "seven thousand,", "eight hundred and", "ninety-", " "], umpteen.spellItOut(number1234567890))
	  	})	  
	  	var number12345678901 = 12345678901;
	  	it ('should spell out a eleven-digit number ', function(){
	  		console.log(umpteen.spellItOut(number12345678901));
	  		should.deepEqual([" ", " ", "twelve billion,", "three hundred and", "forty-", "five million,", "six hundred and", "seventy-", "eight thousand,", "nine hundred and", " ", "one"], umpteen.spellItOut(number12345678901))
	  	})	
	  	var number123456789012 = 123456789012;
	  	it ('should spell out a twelve-digit number ', function(){
	  		console.log(umpteen.spellItOut(number123456789012));
	  		should.deepEqual(["one hundred and", "twenty-", "three billion,", "four hundred and", "fifty-", "six million,", "seven hundred and", "eighty-", "nine thousand,", " ", " ", "twelve"], umpteen.spellItOut(number123456789012))
	  	})	
	  	var number1234567890123 = 1234567890123;
	  	it ('should spell out a thirteen-digit number ', function(){
	  		console.log(umpteen.spellItOut(number1234567890123));
	  		should.deepEqual([" ", " ", "one trillion,", "two hundred and", "thirty-", "four billion,", "five hundred and", "sixty-", "seven million,", "eight hundred and", "ninety-", "  thousand,", "one hundred and", "twenty-", "three"], umpteen.spellItOut(number1234567890123))
	  	})		  	  		  		
	  	var number12345678901234 = 12345678901234;
	  	it ('should spell out a fourteen-digit number ', function(){
	  		console.log(umpteen.spellItOut(number12345678901234));
	  		should.deepEqual([" ", " ", "twelve trillion,", "three hundred and", "forty-", "five billion,", "six hundred and", "seventy-", "eight million,", "nine hundred and", " ", "one thousand,", "two hundred and", "thirty-", "four"], umpteen.spellItOut(number12345678901234))
	  	})	
	  	var number123456789012345 = 123456789012345;
	  	it ('should spell out a fifteen-digit number ', function(){
	  		console.log(umpteen.spellItOut(number123456789012345));
	  		should.deepEqual(["one hundred and", "twenty-", "three trillion,", "four hundred and", "fifty-", "six billion,", "seven hundred and", "eighty-", "nine million,", " ", " ", "twelve thousand,", "three hundred and", "forty-", "five"], umpteen.spellItOut(number123456789012345))
	  	})	
	  	var number1234567890123456 = 1234567890123456;
	  	it ('should spell out a sixteen-digit number ', function(){
	  		console.log(umpteen.spellItOut(number1234567890123456));
	  		should.deepEqual([" ", " ", "one quadrillion,", "two hundred and", "thirty-", "four trillion,", "five hundred and", "sixty-", "seven billion,", "eight hundred and", "ninety-", "  million,", "one hundred and", "twenty-", "three thousand,", "four hundred and", "fifty-", "six"], umpteen.spellItOut(number1234567890123456))
	  	})	
	  	// this test fails because of some mysterious javascript big number thing
	  	var number12345678901234567 = "12345678901234567";
	  	it ('should spell out a seventeen-digit number ', function(){
	  		console.log(umpteen.spellItOut(number12345678901234567));
	  		should.deepEqual([" ", " ", "twelve quadrillion,", "three hundred and", "forty-", "five trillion,", "six hundred and", "seventy-", "eight billion,", "nine hundred and", " ", "one million,", "two hundred and", "thirty-", "four thousand,", "five hundred and", "sixty-", "seven"], umpteen.spellItOut(number12345678901234567))
	  	})
	})
	describe('making the number arrays into pretty strings', function(){
	  	var NumArray123 = ["one hundred and", "twenty-", "three"];
	  	it('should turn the array into a single pretty string', function(){	  
	  		console.log(umpteen.phrasify(NumArray123));	
		  	should.equal("one hundred and twenty-three", umpteen.phrasify(NumArray123));
	  	})
	  	var NumArray1234567890123456 = [" ", " ", "one quadrillion,", "two hundred and", "thirty-", "four trillion,", "five hundred and", "sixty-", "seven billion,", "eight hundred and", "ninety-", "  million,", "one hundred and", "twenty-", "three thousand,", "four hundred and", "fifty-", "six"];
	  	it('should turn the array into a single pretty string', function(){	  
	  		console.log(umpteen.phrasify(NumArray1234567890123456));	
		  	should.equal("one quadrillion, two hundred and thirty-four trillion, five hundred and sixty-seven billion, eight hundred and ninety million, one hundred and twenty-three thousand, four hundred and fifty-six", umpteen.phrasify(NumArray1234567890123456));
	  	})

	}
		)


