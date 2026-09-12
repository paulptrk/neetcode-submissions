class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let maxProfit = 0;

        for (let right = 0; right < prices.length; right++) {
            const currProfit = prices[right] - prices[left];

            if (currProfit < 0) {
                left = right;
            }

            maxProfit = Math.max(maxProfit, currProfit);
        }

        return maxProfit;
    }
}
