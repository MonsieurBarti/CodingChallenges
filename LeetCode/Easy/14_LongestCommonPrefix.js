/**
 * This function takes an array of strings called 'strs' as input.
 * It first checks if the array is empty and returns an empty string if it is.
 * Then, it initializes a variable 'prefix' with the first string of the array.
 * It then loops through the rest of the strings in the array, starting from the second string.
 * For each string, it uses the indexOf method to check if the current 'prefix' is a prefix of the current string.
 * If it is not, it removes the last character from the prefix and checks again.
 * This process continues until the prefix is found to be a common prefix for all the strings in the array or until the prefix becomes an empty string.
 * Finally, it returns the common prefix.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
	if (!strs.length) return '';

	let prefix = strs[0];
	for (let i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(prefix) !== 0) {
			prefix = prefix.slice(0, prefix.length - 1);
			if (!prefix) return '';
		}
	}
	return prefix;
};
