// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDifference = nums => {
    const n = nums.length;
    const maxHeap = new Heap((a, b) => b - a);
    const minHeap = new Heap();
    const seqLen = n / 3;

    let result = Infinity;

    const prefix = new Array(n).fill(0);
    const suffix = new Array(n).fill(0);

    let sum = 0;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        sum += num;
        maxHeap.insert(num);

        while (maxHeap.size() > seqLen) sum -= maxHeap.remove();
        prefix[i] = sum;
    }

    sum = 0;
    for (let i = n - 1; i >= 0; i--) {
        const num = nums[i];
        sum += num;
        minHeap.insert(num);

        while (minHeap.size() > seqLen) sum -= minHeap.remove();
        suffix[i] = sum;
    }

    for (let i = seqLen; i <= n - seqLen; i++) {
        let leftSum = prefix[i - 1];
        let rightSum = suffix[i];
        result = Math.min(result, leftSum - rightSum);
    }

    return result;
};
