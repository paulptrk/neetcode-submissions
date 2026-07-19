class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let min = 0; 

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] <= nums[nums.length - 1]) {
                min = nums[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return min;
    }
}
