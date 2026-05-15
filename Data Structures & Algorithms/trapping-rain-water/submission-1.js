class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i = 0;
        let l = 0;
        let r = height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];
        let water = 0;

        while(l <= r) {
            if (leftMax < rightMax) {
                water += leftMax - height[i];
                leftMax = Math.max(leftMax, height[++l]);
                i++;
            } else {
                water += rightMax - height[i];
                rightMax = Math.max(rightMax, height[--r]);
                i++;
            }
        }
        return water;
    }
}
