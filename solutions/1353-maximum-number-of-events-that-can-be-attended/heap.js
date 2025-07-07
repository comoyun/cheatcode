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
    const n = events.length;
    let maxDay = 0;
    for (const e of events) maxDay = Math.max(maxDay, e[1]);
    events.sort((a, b) => a[0] - b[0]);
    const heap = new Heap();
    let result = 0;
    for (let i = 1, j = 0; i <= maxDay; i++) {
        while (j < n && events[j][0] <= i) heap.enqueue(events[j++][1]);
        while (!heap.isEmpty() && heap.front() < i) heap.dequeue();
        if (!heap.isEmpty()) {
            heap.dequeue();
            result++;
        }
    }
    return result;
};
