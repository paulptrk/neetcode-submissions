class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWaterAmount = -Infinity;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const leftHeight = heights[l];
            const rightHeight = heights[r]

            const waterAmount = (r - l) * Math.min(leftHeight, rightHeight);
            maxWaterAmount = Math.max(waterAmount, maxWaterAmount);

            if (leftHeight < rightHeight) {
                l++;
            } else {
                r--;
            }
        }

        return maxWaterAmount;
    }
}
