/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        function dfs(root, currMax) {
            if (!root) return 0;

            let numGood = 0
            if (root.val >= currMax) numGood++;
            currMax = Math.max(currMax, root.val);

            numGood += dfs(root.left, currMax);
            numGood += dfs(root.right, currMax);

            return numGood;
        }

        return dfs(root, -Infinity);
    }
}
