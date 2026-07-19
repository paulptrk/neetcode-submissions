class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);
        let min = 0;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (this.feasible(piles, mid, h)) {
                min = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return min;
    }
    
    feasible(piles, speed, limit) {
        let time = 0;
        for (const pile of piles) {
            time += Math.ceil(pile / speed);
        }
        return time <= limit;
    }

}
