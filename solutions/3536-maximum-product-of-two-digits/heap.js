// time: O(d)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const maxProduct = n => {
    const heap = new MinPriorityQueue();

    while (n) {
        const digit = n % 10;
        heap.enqueue(digit);
        if (heap.size() > 2) heap.dequeue();
        n = Math.floor(n / 10);
    }

    return heap.dequeue() * heap.dequeue();
};
