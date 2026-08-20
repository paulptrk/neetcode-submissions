class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort();
        const map = new Map();
        const res = [];

        function dfs(state, start) {
            res.push([...state]);

            for (let i = start; i < nums.length; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;

                state.push(nums[i]);
                dfs(state, i + 1);
                state.pop();
            }
        }
        dfs([], 0);
        return res;
    }
}
