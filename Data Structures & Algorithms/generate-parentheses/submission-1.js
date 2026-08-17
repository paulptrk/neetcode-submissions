class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        function dfs(state, numOpen, numClose) {
            if (state.length === n * 2) {
                res.push(state.join(""));
                return;
            }

            if (numOpen < n) {
                state.push("(");
                dfs(state, numOpen + 1, numClose);
                state.pop();
            }

            if (numClose < numOpen) {
                state.push(")");
                dfs(state, numOpen, numClose + 1);
                state.pop();
            }
        }
        dfs([], 0, 0);
        return res;
    }
}
