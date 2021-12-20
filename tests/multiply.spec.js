const { multiply } = require('../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
		const result = multiply(3, 4);
		expect(result).toBe(12);
	});

	test('should return a negative result if one of the arguments is negative', () => {
		const result = multiply(-6, 7);
		expect(result).toBe(-42);
	});

	test('should return 0 if one of the arguments is equal to 0', () => {
		const result = multiply(5, 0);
		expect(result).toBe(0);
	})
});