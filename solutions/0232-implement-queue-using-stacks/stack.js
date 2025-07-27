// time: O(1)
// space: O(n)

class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.inStack.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (!this.outStack.length)
            while (this.inStack.length) this.outStack.push(this.inStack.pop());
        return this.outStack.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        if (!this.outStack.length)
            while (this.inStack.length) this.outStack.push(this.inStack.pop());
        return this.outStack.length && this.outStack.at(-1);
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.inStack.length + this.outStack.length === 0;
    }
}
