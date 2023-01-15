/**
 * This function takes in a string "s" and returns the length of the last word in the string.
 * It first trims any leading or trailing whitespaces from the input string using the .trim() method.
 * Then it uses the .split(' ') method to create an array of words from the string, where the delimiter is a single space.
 * It then uses the .pop() method to retrieve the last element of the array (the last word), and finally returns the length
 * of this last word using the .length property.
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
	const lastWord = s.trim().split(' ').pop();
	return lastWord.length;
};
