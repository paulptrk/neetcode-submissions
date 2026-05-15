class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;

        const prefix = [];
        let prefixProduct = 1;
        for (let i = 0; i < n; i++) {
            prefixProduct *= nums[i];
            prefix[i] = prefixProduct;
        }

        const postfix = []
        let postfixProduct = 1;
          for (let i = n - 1; i >= 0; i--) {
            postfixProduct *= nums[i];
            postfix[i] = postfixProduct;
        }

        const res = [];
        for (let i = 0; i < n; i++) {
            const left = i > 0 ? prefix[i - 1] : 1;
            const right = i < n - 1 ? postfix[i + 1] : 1;
            res[i] = left * right;
        }
        
        return res;
    }
}
