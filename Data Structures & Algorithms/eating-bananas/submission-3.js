class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function feasible(speed, limit) {
            let time = 0;
            for (const pile of piles) {
                time += Math.ceil(pile / speed);
            }
            return time <= limit;
        }

        let left = 1;
        let right = Math.max(...piles);
        let min = Infinity;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (feasible(mid, h)) {
                min = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return min;
    }
}
