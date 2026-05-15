class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 0;
        let right = Math.max(...piles);

        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            let time = 0;
            for (const pile of piles) {
                time += Math.ceil(pile / mid);
            }
            if (time > h) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}
