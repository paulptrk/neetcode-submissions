class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        const set = new Set();

        function dfs(state) {
            if (state.length === nums.length) {
                res.push([...state]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (set.has(i)) continue;
                if (i > 0 && nums[i] === nums[i - 1] && !set.has(i - 1)) continue;
                const num = nums[i];
                state.push(num);
                set.add(i);
                dfs(state);
                state.pop();
                set.delete(i);
            }
        }
        dfs([]);
        return res;
    }
}
