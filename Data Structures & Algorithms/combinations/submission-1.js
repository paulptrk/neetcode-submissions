class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        function dfs(start, state) {
            if (state.length === k) {
                res.push([...state]);
                return;
            }

            for (let i = start; i <= n; i++) {
                state.push(i);
                dfs(i + 1, state);
                state.pop();
            }
        }

        dfs(1, []);
        return res;
    }
}
