class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        function dfs(start, state, remain) {
            if (remain === 0) {
                res.push([...state]);
                return;
            }

            if (remain < 0) {
                return;
            }

            for (let i = start; i < nums.length; i++) {
                const num = nums[i];
                state.push(num);
                dfs(i, state, remain - num);
                state.pop();
            }
        }

        dfs(0, [], target);
        return res;
    }
}
