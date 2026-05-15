class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows = new Array(9).fill(0).map(() => new Set());
        const cols = new Array(9).fill(0).map(() => new Set());
        const boxes = new Array(9).fill(0).map(() => new Set());

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const val = board[row][col];
                if (val === '.') continue;

                const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                if (rows[row].has(val) || cols[col].has(val) || boxes[boxIndex].has(val)) {
                  return false; // Duplicate found
                }

                rows[row].add(val);
                cols[col].add(val);
                boxes[boxIndex].add(val);
            }
    }

    return true; // All checks passed
    }
}
