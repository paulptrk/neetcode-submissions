class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0 || (i > 0 && nums[i] === nums[i - 1])) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const total = nums[i] + nums[left] + nums[right];
                if (total === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                } else if (total > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return res;
    }
}
