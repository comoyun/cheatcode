// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
const totalCost = (costs, k, candidates) => {
    const n = costs.length;
    let left = 0,
        right = n - 1,
        total = 0;

    const leftHeap = new Heap((a, b) => costs[a] - costs[b]),
        rightHeap = new Heap((a, b) => costs[a] - costs[b]);

    if (2 * candidates >= n) {
        costs.sort((a, b) => a - b);
        for (let i = 0; i < k; i++) total += costs[i];
        return total;
    }

    for (let i = 0; i < candidates; i++) {
        leftHeap.insert(left++);
        rightHeap.insert(right--);
    }

    for (let hire = 0; hire < k; hire++) {
        const lmin =
            leftHeap.peek() !== null ? costs[leftHeap.peek()] : Infinity;
        const rmin =
            rightHeap.peek() !== null ? costs[rightHeap.peek()] : Infinity;

        if (lmin <= rmin) {
            total += costs[leftHeap.remove()];
            if (left <= right) leftHeap.insert(left++);
        } else {
            total += costs[rightHeap.remove()];
            if (left <= right) rightHeap.insert(right--);
        }
    }

    return total;
};
