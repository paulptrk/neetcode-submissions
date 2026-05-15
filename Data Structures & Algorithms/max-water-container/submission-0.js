class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWaterAmount = -Infinity;

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {

                const waterAmount = (j - i) * Math.min(heights[i], heights[j]);
                maxWaterAmount = Math.max(waterAmount, maxWaterAmount);
            }
        }
        return maxWaterAmount;
    }
}
