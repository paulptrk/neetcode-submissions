class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        function isPalindrome(s) {
            let left = 0;
            let right = s.length - 1;

            while (left < right) {
                if (s[left] !== s[right]) return false;
                left++;
                right--;
            }

            return true;
        }

        const res = [];

        function dfs(state, start) {
            if (start === s.length) {
                res.push([...state]);
                return;
            }

            for (let end = start + 1; end <= s.length; end++) {
                const piece = s.slice(start, end);

                if (isPalindrome(piece)) {
                    state.push(piece);
                    dfs(state, end);
                    state.pop();
                }
            }
        }
        dfs([], 0);
        return res;
    }
}
