/**
 * This code is a function that converts a Roman numeral string to an integer.
 * It uses a map object to store the corresponding integer values of each Roman numeral.
 * The function iterates through the input string, and for each character, it looks up the corresponding integer value in the map.
 * It then checks if the current character is followed by a larger Roman numeral, and if so, it subtracts the current value from the result.
 * Otherwise, it adds the current value to the result. Finally, the function returns the final result.
 */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;
	for (let i = 0; i < s.length; i++) {
		let value = map[s[i]];
		if (i < s.length - 1 && value < map[s[i + 1]]) {
			result -= value;
		} else {
			result += value;
		}
	}
	return result;
};
