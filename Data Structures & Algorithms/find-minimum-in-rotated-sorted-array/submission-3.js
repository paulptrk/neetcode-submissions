class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        const lastNum = nums[right];
        let res = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const num = nums[mid];

            if (num <= lastNum) {
                res = num;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return res;
    }
}
