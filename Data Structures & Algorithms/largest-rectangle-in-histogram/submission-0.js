class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let largestArea = 0;

        for (let i = 0; i < heights.length; i++) {
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                const top = stack.pop();
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                const area = heights[top] * width;
                largestArea = Math.max(largestArea, area);
            }
            stack.push(i);
        }

        // Handle remaining elements in the stack
        while (stack.length > 0) {
            const top = stack.pop();
            const width = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
            const area = heights[top] * width;
            largestArea = Math.max(largestArea, area);
        }

        return largestArea;
    }
}
