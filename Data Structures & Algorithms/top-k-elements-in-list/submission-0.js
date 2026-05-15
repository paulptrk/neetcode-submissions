class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freqArr = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            count[num] = (count[num] ?? 0) + 1;
        }

        for (const num in count) {
            freqArr[count[num]].push(num);
        }

        const topKArr = [];
        for (let i = freqArr.length - 1; i > 0; i--) {
            for (const num of freqArr[i]) {
                topKArr.push(num);
                if (topKArr.length === k) return topKArr;
            }
        }
    }
}
