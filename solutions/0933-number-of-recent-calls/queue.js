/*
 * @title: Queue
 * @time: O(n)
 * @space: O(n)
 */

class RecentCounter {
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} t
     * @return {number}
     */
    ping(t) {
        this.queue.push(t);
        while (
            this.queue.length > 1 &&
            this.queue.at(-1) - this.queue.at(0) > 3000
        )
            this.queue.shift();
        return this.queue.length;
    }
}
