class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const closing = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (const char of s) {
            if (char in closing) {
                const top = stack.pop();
                if (closing[char] !== top) return false;
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
