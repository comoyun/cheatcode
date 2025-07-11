/*
 * @title: Heap
 * @time: O(m log n)
 * @space: O(n + m)
 */

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
const mostBooked = (n, meetings) => {
    meetings.sort((a, b) => a[0] - b[0]);

    const free = new MinHeap((a, b) => a - b);
    for (let i = 0; i < n; i++) free.push(i);

    const busy = new MinHeap((a, b) =>
        a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
    );
    const count = new Array(n).fill(0);

    for (const [start, end] of meetings) {
        while (busy.size() && busy.peek()[0] <= start) {
            const [_, room] = busy.pop();
            free.push(room);
        }

        if (free.size()) {
            const room = free.pop();
            busy.push([end, room]);
            count[room]++;
            continue;
        }

        const [endTime, room] = busy.pop();
        const duration = end - start;
        busy.push([endTime + duration, room]);
        count[room]++;
    }

    let max = 0,
        res = 0;
    for (let i = 0; i < n; i++) {
        if (count[i] > max) {
            max = count[i];
            res = i;
        }
    }
    return res;
};
