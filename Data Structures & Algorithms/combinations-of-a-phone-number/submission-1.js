class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];

        const digitToChar = [
            "", // 0
            "", // 1
            "abc", // 2
            "def", // 3
            "ghi", // 4
            "jkl", // 5
            "mno", // 6
            "pqrs", // 7
            "tuv", // 8
            "wxyz", // 9
        ];
        const res = [];
        function dfs(state, start) {
            if (state.length === digits.length) {
                res.push(state.join(""));
                return;
            }

            const currDigit = digits[start];
            const charSet = digitToChar[currDigit];

            for (let i = 0; i < charSet.length; i++) {
                state.push(charSet[i]);
                dfs(state, start + 1);
                state.pop();
            }
        }
        dfs([], 0);
        return res;
    }
}
