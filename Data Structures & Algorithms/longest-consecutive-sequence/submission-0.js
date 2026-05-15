class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longestSeq = 0;
        
        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let currNum = num;
                let currSeq = 1;
                while(numSet.has(currNum + 1)) {
                    currSeq++;
                    currNum++;
                }
                longestSeq = Math.max(currSeq, longestSeq);
            }
        }
        return longestSeq;

    }
}
