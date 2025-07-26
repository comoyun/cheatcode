// time: O(n log n)
// space: O(n)

/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = n => {
    const heap = new Heap();
    const set = new Set();
    const primeFactors = [2, 3, 5];
    heap.insert(1);

    while (true) {
        const curr = heap.remove();
        if (set.has(curr)) continue;
        set.add(curr);
        if (!--n) return curr;
        for (const factor of primeFactors) heap.insert(factor * curr);
    }

    return -1;
};

