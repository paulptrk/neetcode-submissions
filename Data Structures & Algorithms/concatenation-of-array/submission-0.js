class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length * 2;
        const ans = new Array(len);
        for (let i = 0; i < len; i++) {
            ans[i] = nums[i % nums.length];
        }
        return ans;
    }
}
