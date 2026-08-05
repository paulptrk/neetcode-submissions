class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        function dfs(start, state, total) {
            if (total === target) {
                res.push([...state]);
                return;
            }

            if (total > target || start >= nums.length) {
                return;
            }

            state.push(nums[start]);
            dfs(start, state, total + nums[start]);
            state.pop();

            dfs(start + 1, state, total);
        }
        dfs(0, [], 0);
        return res;
    }
}
