class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        this.backTrack(0, 0, n, res, '');
        return res;
    }

    backTrack(nOpen, nClose, n, res, stack) {
        if (nOpen === nClose && nOpen === n) {
            res.push(stack);
            return;
        }

        if (nOpen < n) {
            this.backTrack(nOpen + 1, nClose, n, res, stack + '(');
        }

        if (nClose < nOpen) {
            this.backTrack(nOpen, nClose + 1, n, res, stack + ')');
        }
    }
}
