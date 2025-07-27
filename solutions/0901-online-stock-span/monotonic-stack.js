// time: O(n)
// space: O(n)

class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let span = 1;
        while (this.stack.length && this.stack.at(-1)[0] <= price)
            span += this.stack.pop()[1];
        this.stack.push([price, span]);
        return span;
    }
}
