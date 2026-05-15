class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashMap = {};

        for (let num of nums) {
            if (hashMap[num]) return true;
            hashMap[num] = true;
        }
        return false;
    }
}
