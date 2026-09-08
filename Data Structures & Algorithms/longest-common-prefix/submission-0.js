class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans = "";
        let i = 0;

        while (true) {
            const targetChar = strs[0][i];

            if (targetChar === undefined) return ans;

            for (const str of strs) {
                if (i >= str.length || str[i] !== targetChar) {
                    return ans;
                }
            }

            ans += targetChar;
            i++;
        }
    }
}
