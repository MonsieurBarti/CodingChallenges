/**
 * This code is checking for the validity of a string of parentheses, square brackets, and curly braces.
 * It uses a stack data structure to keep track of the open brackets. The function iterates through each character in the input string, s.
 * If the current character is an opening bracket, it pushes it onto the stack.
 * If the current character is a closing bracket, it checks the top of the stack for a matching opening bracket.
 *  * If the top of the stack is a matching opening bracket, it pops it off the stack.
 *  * If the top of the stack is not a matching opening bracket, it returns false (as the parentheses are not balanced).
 * After the loop, if the stack is empty, it returns true, indicating that the parentheses are balanced.
 * Else, it returns false, indicating that the parentheses are not balanced.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
	const stack = [];
	for (const c of s) {
		if (c === '(' || c === '[' || c === '{') {
			stack.push(c);
		} else {
			if (stack.length === 0) return false;
			const top = stack.pop();
			if ((c === ')' && top !== '(') || (c === ']' && top !== '[') || (c === '}' && top !== '{')) {
				return false;
			}
		}
	}
	return stack.length === 0;
};
