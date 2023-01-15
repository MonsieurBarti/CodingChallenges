/**
 * This code checks if a given number x is a palindrome by reversing the digits of x and comparing it to the original number.
 * The code first checks if x is negative or if it is divisible by 10 and not equal to zero, in which case it immediately returns false
 * since negative numbers and numbers ending in 0 cannot be palindromes. Then it uses a while loop to reverse the digits of x and store
 * it in the variable "reversed". It then compares the reversed number to the original number x, and also checks if x is equal
 * to the reversed number divided by 10, which accounts for cases where the original number has an odd number of digits.
 * If either comparison is true, the function returns true indicating that x is a palindrome, otherwise it returns false.
 * This solution has a time complexity of O(log n) since it is only iterating through half of the digits of x,
 * and a space complexity of O(1) as it only uses a single variable "reversed" to store the reversed number.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
	if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
	let reversed = 0;
	while (x > reversed) {
		reversed = reversed * 10 + (x % 10);
		x = Math.floor(x / 10);
	}
	return x === reversed || x === Math.floor(reversed / 10);
};
