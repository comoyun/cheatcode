// time: O(n + k * log(n))
// space: O()

/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
const maxAverageRatio = (classes, extraStudents) => {
    const gain = (pass, total) => (pass + 1) / (total + 1) - pass / total;
    const heap = new Heap((a, b) => b[0] - a[0]);

    for (const [pass, total] of classes)
        heap.insert([gain(pass, total), [pass, total]]);

    while (extraStudents--) {
        const [_, [pass, total]] = heap.extractMin();
        const newGain = gain(pass + 1, total + 1);
        heap.insert([newGain, [pass + 1, total + 1]]);
    }

    let sum = 0;
    for (const [ratio, [pass, total]] of heap.data) sum += pass / total;

    return sum / heap.size();
};
