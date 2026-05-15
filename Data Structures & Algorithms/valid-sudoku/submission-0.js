class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Check Rows
        for (let i = 0; i < board.length; i++) {
            const nums = new Set();
            for (let j = 0; j < board[i].length; j++) {
                const val = board[i][j]
                if (nums.has(val)) {
                    return false;
                } else if (val !== '.') {
                    nums.add(val);
                }
                
            }
        }

        // Check Columns
        for (let j = 0; j < board[0].length; j++) {
            const nums = new Set();
            for (let i = 0; i < board.length; i++) {
                const val = board[i][j];
                if (nums.has(val)) {
                    return false;
                } else if (val !== '.') {
                    nums.add(val);
                }
                
            }
        }

        // Check 3x3 Boxes
         for (let boxRow = 0; boxRow < 3; boxRow++) { // Iterating through box rows (0, 1, 2)
            for (let boxCol = 0; boxCol < 3; boxCol++) { // Iterating through box columns (0, 1, 2)
                const nums = new Set();
                for (let i = 0; i < 3; i++) { // Rows inside a single box
                    for (let j = 0; j < 3; j++) { // Columns inside a single box
                        const val = board[boxRow * 3 + i][boxCol * 3 + j];
                        if (nums.has(val)) {
                            return false;
                        } else if (val !== '.') {
                            nums.add(val);
                        }
                    }
                }
            }
        }

        return true;
    }
}
