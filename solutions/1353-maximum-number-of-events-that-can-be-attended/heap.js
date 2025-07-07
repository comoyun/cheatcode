/*
 * @title: Heap
 * @time: O((T+n)logn)
 * @space: O(n)
 */

/**
 * @param {number[][]} events
 * @return {number}
 */
const maxEvents = events => {
    events.sort((a, b) => a[0] - b[0]);

    const heap = new MinHeap();
    let result = 0;
    let i = 0;

    let day = Math.min(...events.map(([start]) => start));

    while (i < events.length || heap.size()) {
        while (i < events.length && events[i][0] === day)
            heap.insert(events[i++][1]);

        while (heap.size() && heap.peek() < day) heap.remove();

        if (heap.size()) {
            heap.remove();
            result++;
        }

        day++;
    }

    return result;
};
