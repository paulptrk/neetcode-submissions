class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operands = [];
        const operators = new Set(['+', '-', '*', '/']);
        for (let c of tokens) {
            if (operators.has(c)) {
                const secondOperand = operands.pop();
                const firstOperand = operands.pop();
                switch(c) {
                    case '+':
                        operands.push(firstOperand + secondOperand);
                        break;
                    case '-':
                        operands.push(firstOperand - secondOperand);
                        break;
                    case '*':
                        operands.push(firstOperand * secondOperand);
                        break;
                    case '/':
                        operands.push(Math.trunc(firstOperand / secondOperand));
                        break;
                }

            } else {
                operands.push(Number(c));
            }
        }
        return operands.pop();
    }
}
