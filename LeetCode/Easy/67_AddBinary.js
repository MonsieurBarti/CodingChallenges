/**
 * This code is a solution to the problem of adding binary numbers. It uses two pointers, i and j,
 * to iterate through the characters of the input strings a and b respectively, starting from the rightmost characters.
 * The variable carry is used to keep track of any carry value from the addition.
 * The while loop runs until both pointers have reached the leftmost characters of their respective strings.
 * Inside the loop, the variable sum is initialized to the current value of the carry variable.
 * If the i pointer is not at the leftmost character of a, the current character's value is added to the sum variable.
 * Similarly, if the j pointer is not at the leftmost character of b, the current character's value is added to the sum variable.
 * The current digit of the result is then calculated by taking the remainder of the sum variable divided by 2.
 * This digit is added to the result string. The carry value is calculated by taking the floor of the sum variable divided by 2.
 * Finally, the loop ends, and the code checks if there's a remaining carry value, if so, it is added to the result string.
 * The result string is returned as the final answer.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
	let carry = 0;
	let result = '';
	let i = a.length - 1;
	let j = b.length - 1;
	while (i >= 0 || j >= 0) {
		let sum = carry;
		if (i >= 0) sum += a.charAt(i--) - '0';
		if (j >= 0) sum += b.charAt(j--) - '0';
		result = (sum % 2) + result;
		carry = Math.floor(sum / 2);
	}

	if (carry !== 0) result = carry + result;
	return result;
};
