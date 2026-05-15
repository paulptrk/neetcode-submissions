class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let currMaxLeft = 0;
        const leftMax = new Array(height.length);
        for (let i = 0; i < height.length; i++) {
            currMaxLeft = Math.max(currMaxLeft, height[i]);
            leftMax[i] = currMaxLeft;
        }

        let currMaxRight = 0;
        const rightMax = new Array(height.length);
        for (let i = height.length - 1; i >= 0; i--) {
            currMaxRight = Math.max(currMaxRight, height[i]);
            rightMax[i] = currMaxRight;
        }
        
        let water = 0;
        for(let i = 0; i < height.length; i++) {
            water += Math.min(leftMax[i], rightMax[i]) - height[i];
        }
        
        return water;
    }
}
