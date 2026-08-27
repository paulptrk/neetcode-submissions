class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        function dfs(state) {
            if (state.size === nums.length) {
                res.push([...state]);
                return;
            }

            for (const num of nums) {
                if (state.has(num)) continue;
                state.add(num);
                dfs(state);
                state.delete(num);
            }
        }
        dfs(new Set());
        return res;
    }
}
