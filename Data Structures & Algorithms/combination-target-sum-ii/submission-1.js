class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const res = [];

        function dfs(start, state, remain) {
            if (remain === 0) {
                res.push([...state]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                if (candidates[i] > remain) break;
                if (i > start && candidates[i] === candidates[i - 1]) continue;

                state.push(candidates[i]);
                dfs(i + 1, state, remain - candidates[i]);
                state.pop();
            }
        }
        dfs(0, [], target);
        return res;
    }
}
