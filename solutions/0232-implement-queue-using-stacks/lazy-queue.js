// time: O(1)
// space: O(n)

class MyQueue {
    constructor() {
        this.stack = [];
        this.idx = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x);

        if (this.idx > 1000) {
            let i = 0;
            while (this.idx < this.stack.length)
                this.stack[i++] = this.stack[this.idx++];
            this.stack.length = i;
            this.idx = 0;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.idx >= this.stack.length) return;
        return this.stack[this.idx++];
    }

    /**
     * @return {number}
     */
    peek() {
        return this.stack[this.idx];
    }

    /**
     * @return {boolean}
     */
    empty() {
        const length = this.stack.length;
        return this.idx >= length;
    }
}
