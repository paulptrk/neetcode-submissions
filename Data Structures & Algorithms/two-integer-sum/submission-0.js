class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {};
        
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (hashMap[complement] !== undefined) return [hashMap[complement], i];

            hashMap[nums[i]] = i;
        }
    }
}
