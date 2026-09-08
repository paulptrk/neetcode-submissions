class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs || strs.length === 0) return "";

        let ans = "";
        let i = 0;

        while (true) {
            if (i >= strs[0].length) return ans;

            const targetChar = strs[0][i];

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
