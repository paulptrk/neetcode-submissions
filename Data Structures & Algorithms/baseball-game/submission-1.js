class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for (let i = 0; i < operations.length; i++) {
            const operation = operations[i];
            switch (operation) {
                case "+":
                    stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                    break;
                case "D":
                    stack.push(stack[stack.length - 1] * 2);
                    break;
                case "C":
                    stack.pop();
                    break;
                default:
                    stack.push(Number(operation));
            }
        }

        return stack.reduce((total, curr) => total + curr, 0);
    }
}
