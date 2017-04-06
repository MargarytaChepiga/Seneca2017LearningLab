// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {
	
	test('returns true for simple myseneca address', function() {
		var simpleEmail = 'someone@myseneca.ca';
		expect(seneca.isValidEmail(simpleEmail)).toBe(true);
	});

	test('returns false for a non-myseneca address', function() {
		var gmailAddress = 'someone@gmail.com';
		expect(seneca.isValidEmail(gmailAddress)).toBe(false);
	});

	test('returns false for a number', function(){
		var number = 12345;
		expect(seneca.isValidEmail(number)).toBe(false);
	});

	test('returns false for a variable which is null', function(){
		var nullVariable = null;
		expect(seneca.isValidEmail(nullVariable)).toBe(false);
	});

	test('returns false for email address containing leading whitespaces', function(){
		var emailWhitespaces = '  mshaw@myseneca.ca';
		expect(seneca.isValidEmail(emailWhitespaces)).toBe(false);
	});
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

	test('adds @myseneca.ca to the end of name', function() {
		var name = "mshaw";
		expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
	});

	test('returns false for passing null', function(){
		var name = null;
		expect(seneca.formatSenecaEmail(name)).toBe(false);
	});
	
	test('returns false for passing number', function(){
		var name = 12345;
		expect(seneca.formatSenecaEmail(name)).toBe(false);
	});
});

