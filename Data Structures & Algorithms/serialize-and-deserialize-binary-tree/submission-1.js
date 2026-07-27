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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let str = "";
        function dfs(root) {
            if (!root) {
                str += "N,";
                return;
            }

            str += `${root.val},`;
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root);
        return str;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let preorderArr = data.split(",");
        let i = 0;
        function dfs() {
            const val = preorderArr[i++];

            if (val === "N") return null;

            const node = new TreeNode(val);
            node.left = dfs();
            node.right = dfs();

            return node;
        }
        return dfs();
    }
}
