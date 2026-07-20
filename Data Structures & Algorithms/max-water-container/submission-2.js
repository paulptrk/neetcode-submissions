class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;

        while (left < right) {
            const length = right - left;
            if (heights[left] >= heights[right]) {
                max = Math.max(max, length * heights[right]);
                right--;
            } else {
                max = Math.max(max, length * heights[left]);
                left++;
            }
        }
        return max;
    }
}
