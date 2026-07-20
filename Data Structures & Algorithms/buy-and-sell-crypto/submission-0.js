class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let maxProfit = 0;

        for (let right = 0; right < prices.length; right++) {
            const profit = prices[right] - prices[left];
            if (profit < 0) {
                left = right;
            } else {
                maxProfit = Math.max(maxProfit, profit);
            }

        }
        return maxProfit;
    }
}
