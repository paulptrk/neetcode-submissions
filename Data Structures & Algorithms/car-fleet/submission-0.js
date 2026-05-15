class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const timeStack = [];
        const pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);

        for (let i = 0; i < pair.length; i++) {
            let time = (target - pair[i][0]) / pair[i][1];
            if (timeStack.length > 0 && time <= timeStack[timeStack.length - 1]) {
                continue;
            }
            timeStack.push(time);
        }        


        return timeStack.length;
    }
}
