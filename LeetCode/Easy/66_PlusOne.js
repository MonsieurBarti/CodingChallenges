/**
 * This code takes in an array of digits and returns a new array with the digits incremented by one.
 * The function starts by iterating through the digits array in reverse order (starting from the last element).
 * If the current digit is 9, it changes the digit to 0. If the current digit is not 9, it increments the digit
 * by one and returns the modified digits array. If all the digits are 9, it means a carryover is needed,
 * so the function adds a 1 to the beginning of the array, and returns the new array.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 9) {
			digits[i] = 0;
		} else {
			digits[i]++;
			return digits;
		}
	}
	digits.unshift(1);
	return digits;
};
