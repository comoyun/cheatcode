// time: O(n log n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const clearStars = s => {
    s = s.split('');
    s = s.map((char, idx) => [char.charCodeAt(0) - 97, idx]);

    const heap = new Heap((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return b[1] - a[1];
    });

    let result = [];

    for (const [code, idx] of s) {
        if (code === -55) heap.remove();
        else heap.insert([code, idx]);
    }

    while (heap.size()) result.push(heap.remove());

    result.sort((a, b) => a[1] - b[1]);

    result = result.map(item => String.fromCharCode(97 + item[0]));

    return result.join('');
};
