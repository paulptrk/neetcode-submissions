class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        function dfs(start, remain, state) {
            if (remain === 0) {
                res.push([...state]);
                return;
            }

            if (remain < 0) {
                return;
            }

            for (let i = start; i < nums.length; i++) {
                state.push(nums[i]);
                dfs(i, remain - nums[i], state);
                state.pop()
            }
        }
        dfs(0, target, []);
        return res;
    }
}
