class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        function feasible(weightCapacity) {
            let numDays = 1;
            let currLoad = 0;
            for (const weight of weights) {
                if (currLoad + weight > weightCapacity) {
                    numDays++;
                    currLoad = weight;
                    continue;
                }
                currLoad += weight;
            }
            return numDays <= days;
        }

        let left = Math.max(...weights);
        let right = weights.reduce((total, curr) => total + curr, 0);
        let res = Infinity;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (feasible(mid)) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return res;
    }
}
