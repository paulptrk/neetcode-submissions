class MinStack {
    stack = [];
    minStack = [];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length > 0) {
            const poppedVal = this.stack.pop();
            if (poppedVal === this.minStack[this.minStack.length - 1]) {
                this.minStack.pop();
            }
            return poppedVal;
        }
        return null;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        }
        return null;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
