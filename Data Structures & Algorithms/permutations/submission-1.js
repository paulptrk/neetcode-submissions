class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const n = nums.length;
        const unique = new Array(n).fill(false);
        const res = [];

        function backtrack(state) {
            if (state.length === n) {
                res.push([...state]);
                return;
            }

            for (let i = 0; i < n; i++) {
                if (!unique[i]) {
                    unique[i] = true;
                    state.push(nums[i]);
                    backtrack(state);
                    unique[i] = false;
                    state.pop();
                }
            }
        }
        backtrack([]);
        return res;
    }
}
