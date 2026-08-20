class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        function dfs(state, start) {
            res.push([...state]);

            for (let i = start; i < nums.length; i++) {
                state.push(nums[i]);
                dfs(state, i + 1);
                state.pop();
            }
        }
        dfs([], 0);
        return res;
    }
}
