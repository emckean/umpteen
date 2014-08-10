var assert = require('assert'),
	should = require('should'),
	umpteen = require('../umpteen.js');

	describe('checking length', function(){
	  	var number9007199254740993 = 9007199254740993;
	  	it ('should reject numbers bigger than JS likes ', function(){
		  	umpteen.checkTypeAndLength(number9007199254740993).should.be.an.instanceof(Error);
	  	})
	  	var number9007199254740993_string = "9007199254740993";
	  	it ('should accept strings that look like numbers bigger than JS likes ', function(){
		  	should.equal("9007199254740993",umpteen.checkTypeAndLength(number9007199254740993_string));
	  	})
	  	var number9007199254740993_string_digits = "90*((*&(*$%07199254740993.99";
	  	it ('should accept strings that look like numbers bigger than JS likes & that have weird chars', function(){
		  	should.equal("9007199254740993",umpteen.checkTypeAndLength(number9007199254740993_string_digits));
	  	})
	  	var number9007199254740992 = 9007199254740992;
	  	it ('should reject numbers bigger than JS likes, take 2 ', function(){
		  	umpteen.checkTypeAndLength(number9007199254740992).should.be.an.instanceof(Error);
	  	})
	  	var numberShort = 1;
	  	it ('should NOT reject numbers that are not bigger than JS likes ', function(){
		  	umpteen.checkTypeAndLength(numberShort).should.not.be.an.instanceof(Error);
	  	})
	  	it ('should reject strings that are longer than JS likes numbers to be ', function(){
				umpteen.checkTypeAndLength("12345678901234567").should.be.an.instanceof(Error);
	  	})	  	
	})
	describe('remove decimals', function(){
	  it('should return a simple number for a decimal', function(){
	      should.equal(3, umpteen.umpteenNumber().noDecimals(3.14));
		})
	  it('should return a simple number for a string decimal', function(){
	      should.equal(3, umpteen.umpteenNumber().noDecimalsString("3.14"));
		})
	  it('should return a simple number for a string double decimal', function(){
	      should.equal(3, umpteen.umpteenNumber().noDecimalsString("3.14.16"));
		})
	  it('should return an error if only decimals, number version', function(){
		    umpteen.umpteenNumber().noDecimals(.14).should.be.an.instanceof(Error);
		})
		it('should return an error if only decimals, string version', function(){
		    umpteen.umpteenNumber().noDecimals(".14").should.be.an.instanceof(Error);
		})
	})
	describe('remove spaces', function(){
	  var numberSpaces = '3 3';
	  it('should return a number without internal spaces', function(){
	      should.equal(33, umpteen.umpteenNumber().onlyDigits(numberSpaces));
		})
		var leadingNumberSpaces = ' 33';
	  it('should return a number without leading spaces', function(){
	      should.equal(33, umpteen.umpteenNumber().onlyDigits(leadingNumberSpaces));
		})
		var trailingNumberSpaces = '33 ';
	  it('should return a number without trailing spaces', function(){
	      should.equal(33, umpteen.umpteenNumber().onlyDigits(trailingNumberSpaces));
		})
	})
	describe('removing commas and other characters', function(){    
		var numberCommas = '3,003';
	    it('should return a number without commas', function(){
	      should.equal(3003, umpteen.umpteenNumber().onlyDigits(numberCommas));
		})
		var numberWithJunk = '9a*&^(*(&^8$$$';
		it('should return just a number with no letters or symbols', function(){
			should.equal(98, umpteen.umpteenNumber().onlyDigits(numberWithJunk));
		})
		var justWord = 'hamburger';
		it('should return an error if no digits at all', function(){
			umpteen.umpteenNumber().onlyDigits(justWord).should.be.an.instanceof(Error);
		})
	})
	describe('does it array?', function(){  	
		var numberForArray = 30003;
	    it('should return an array', function(){
	      should.deepEqual([3,0,0,0,3], umpteen.arrayify(numberForArray));
		})
	})
	describe('hey, check for zeros!', function(){
		var testNumber0 = 0;
		it ('should return an array of ["zero"] for number 0', function(){
	  		should.deepEqual(["zero"], umpteen.checkZero(testNumber0))
	  	})
		var testNumberNot0 = 3;
		it ('should return the number for non-0 numbers', function(){
	  		should.deepEqual(3, umpteen.checkZero(testNumberNot0))
	  	})
	  var testNumberLeading0 = "0003";
		it ('should remove any leading 0s for non-0 numbers', function(){
	  		should.deepEqual(3, umpteen.checkZero(testNumberLeading0))
	  	})	
	  var testNumberLeadingAndTrailing0 = "00010";
		it ('should remove any leading 0s for non-0 numbers', function(){
	  		should.deepEqual(10, umpteen.checkZero(testNumberLeadingAndTrailing0))
	  	})
		var testString0 = "00";
		it ('should return an array of just the word zero for string 0', function(){
	  		should.deepEqual(["zero"], umpteen.checkZero(testString0))
	  })

	})
	describe('number test cases', function(){
		var testNumber0 = 0;
		it ('should return an array for single-digit numbers', function(){
	  		should.deepEqual(["zero"], umpteen.checkZero(testNumber0))
	  	})
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
	  		should.deepEqual(["one hundred and", "twenty-", "three"], umpteen.spellItOut(number123))
	  	})	  
	  	var number204 = 204;
	  	it ('should return an array for three-digit number with a middle zero', function(){
	  		should.deepEqual(["two hundred and", " ", "four"], umpteen.spellItOut(number204))
	  	})
	  	var number240 = 240;
	  	it ('should return an array for three-digit number with a final zero', function(){
	  		should.deepEqual(["two hundred and", "forty-", " "], umpteen.spellItOut(number240))
	  	})	
	  	var number1234 = 1234;
	  	it ('should return an array for a four-digit number', function(){
	  		should.deepEqual([" ", " ", "one thousand,", "two hundred and", "thirty-", "four"], umpteen.spellItOut(number1234))
	  	})  		
	  	var number1024 = 1024;
	  	it ('should return an array for a four-digit number with a zero in the hundreds place', function(){
	  		should.deepEqual([" ", " ", "one thousand,", " ", "twenty-", "four"], umpteen.spellItOut(number1024))
	  	})	
	  	var number1204 = 1204;
	  	it ('should return an array for a four-digit number with a zero in the tens place', function(){
	  		should.deepEqual([" ", " ", "one thousand,", "two hundred and", " ", "four"], umpteen.spellItOut(number1204))
	  	})	
	  	var number12345 = 12345;
	  	it ('should spell out a five-digit number', function(){
	  		should.deepEqual([" ", " ", "twelve thousand,", "three hundred and", "forty-", "five"], umpteen.spellItOut(number12345))
	  	})	
	  	var number120456 = 120456;
	  	it ('should return an array for a five-digit number with a zero in the thousands place', function(){
	  		should.deepEqual([ "one hundred and", "twenty-", "  thousand,", "four hundred and", "fifty-", "six"], umpteen.spellItOut(number120456))
	  	})	
	  	var number123456 = 123456;
	  	it ('should spell out a six digit number', function(){
	  		should.deepEqual(["one hundred and", "twenty-", "three thousand,", "four hundred and", "fifty-", "six"], umpteen.spellItOut(number123456))
	  	})	  	
	  	var number3456789 = 3456789;
	  	it ('should spell out a seven-digit number ', function(){
	  		should.deepEqual([" ", " ", "three million,", "four hundred and", "fifty-", "six thousand,", "seven hundred and", "eighty-", "nine"], umpteen.spellItOut(number3456789))
	  	})	 
	  	var number12345678 = 12345678;
	  	it ('should spell out a eight-digit number ', function(){
	  		should.deepEqual([" ", " ", "twelve million,", "three hundred and", "forty-", "five thousand,", "six hundred and", "seventy-", "eight"], umpteen.spellItOut(number12345678))
	  	})	
	  	var number123456789 = 123456789;
	  	it ('should spell out a nine-digit number ', function(){
	  		should.deepEqual(["one hundred and", "twenty-", "three million,", "four hundred and", "fifty-", "six thousand,", "seven hundred and", "eighty-", "nine"], umpteen.spellItOut(number123456789))
	  	})		
	  	var number1234567890 = 1234567890;
	  	it ('should spell out a ten-digit number ', function(){
	  		should.deepEqual([" ", " ", "one billion,", "two hundred and", "thirty-", "four million,", "five hundred and", "sixty-", "seven thousand,", "eight hundred and", "ninety-", " "], umpteen.spellItOut(number1234567890))
	  	})	  
	  	var number12345678901 = 12345678901;
	  	it ('should spell out a eleven-digit number ', function(){
	  		should.deepEqual([" ", " ", "twelve billion,", "three hundred and", "forty-", "five million,", "six hundred and", "seventy-", "eight thousand,", "nine hundred and", " ", "one"], umpteen.spellItOut(number12345678901))
	  	})	
	  	var number123456789012 = 123456789012;
	  	it ('should spell out a twelve-digit number ', function(){
	  		should.deepEqual(["one hundred and", "twenty-", "three billion,", "four hundred and", "fifty-", "six million,", "seven hundred and", "eighty-", "nine thousand,", " ", " ", "twelve"], umpteen.spellItOut(number123456789012))
	  	})	
	  	var number1234567890123 = 1234567890123;
	  	it ('should spell out a thirteen-digit number ', function(){
	  		should.deepEqual([" ", " ", "one trillion,", "two hundred and", "thirty-", "four billion,", "five hundred and", "sixty-", "seven million,", "eight hundred and", "ninety-", "  thousand,", "one hundred and", "twenty-", "three"], umpteen.spellItOut(number1234567890123))
	  	})		  	  		  		
	  	var number12345678901234 = 12345678901234;
	  	it ('should spell out a fourteen-digit number ', function(){
	  		should.deepEqual([" ", " ", "twelve trillion,", "three hundred and", "forty-", "five billion,", "six hundred and", "seventy-", "eight million,", "nine hundred and", " ", "one thousand,", "two hundred and", "thirty-", "four"], umpteen.spellItOut(number12345678901234))
	  	})	
	  	var number123456789012345 = 123456789012345;
	  	it ('should spell out a fifteen-digit number ', function(){
	  		should.deepEqual(["one hundred and", "twenty-", "three trillion,", "four hundred and", "fifty-", "six billion,", "seven hundred and", "eighty-", "nine million,", " ", " ", "twelve thousand,", "three hundred and", "forty-", "five"], umpteen.spellItOut(number123456789012345))
	  	})	
	  	var number1234567890123456 = 1234567890123456;
	  	it ('should spell out a sixteen-digit number ', function(){
	  		should.deepEqual([" ", " ", "one quadrillion,", "two hundred and", "thirty-", "four trillion,", "five hundred and", "sixty-", "seven billion,", "eight hundred and", "ninety-", "  million,", "one hundred and", "twenty-", "three thousand,", "four hundred and", "fifty-", "six"], umpteen.spellItOut(number1234567890123456))
	  	})	
	  	var number12345678901234567 = "12345678901234567";
	  	it ('should spell out a seventeen-digit number ', function(){
	  		should.deepEqual([" ", " ", "twelve quadrillion,", "three hundred and", "forty-", "five trillion,", "six hundred and", "seventy-", "eight billion,", "nine hundred and", " ", "one million,", "two hundred and", "thirty-", "four thousand,", "five hundred and", "sixty-", "seven"], umpteen.spellItOut(number12345678901234567))
	  	})
	})
	describe('making the number arrays into pretty strings', function(){
	  	var NumArray123 = ["one hundred and", "twenty-", "three"];
	  	it('should turn the array into a single pretty string', function(){	  
		  	should.equal("one hundred and twenty-three", umpteen.phrasify(NumArray123));
	  	})
	  	var NumArray1234567890123456 = [" ", " ", "one quadrillion,", "two hundred and", "thirty-", "four trillion,", "five hundred and", "sixty-", "seven billion,", "eight hundred and", "ninety-", "  million,", "one hundred and", "twenty-", "three thousand,", "four hundred and", "fifty-", "six"];
	  	it('should turn the array into a single pretty string', function(){	  
		  	should.equal("one quadrillion, two hundred and thirty-four trillion, five hundred and sixty-seven billion, eight hundred and ninety million, one hundred and twenty-three thousand, four hundred and fifty-six", umpteen.phrasify(NumArray1234567890123456));
	  	})
	})
	describe('testing final function', function(){
		var testString0 = "00";
		it ('should return an array of just the word zero for string 0', function(){
	  		should.deepEqual("zero", umpteen.finalFunction(testString0))
	  })
	  var test42 = "42d.6.6";
		it ('should return a clean number from a dirty string', function(){
	  		should.deepEqual("forty-two", umpteen.finalFunction(test42))
	  })
	  it ('should pass through an error from the cleannumber test', function(){
	  	umpteen.finalFunction(".014").should.be.an.instanceof(Error);
	  })
	})