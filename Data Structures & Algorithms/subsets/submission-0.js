class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        function backtrack(start, state) {
            res.push([...state]);

            for (let i = start; i < nums.length; i++) {
                state.push(nums[i]);
                backtrack(i + 1, state);
                state.pop();
            }
        }
        backtrack(0, []);
        return res;
    }
}
