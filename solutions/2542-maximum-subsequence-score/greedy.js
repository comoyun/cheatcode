/*
 * @title: Greedy + Heap
 * @time: O(n log n)
 * @space: O(n)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const maxScore = (nums1, nums2, k) => {
    const n = nums1.length;
    const merged = nums1.map((num, i) => [num, nums2[i]]);
    const heap = new Heap((a, b) => a - b);
    merged.sort((a, b) => b[1] - a[1]);

    let sum = 0,
        result = 0;

    for (let i = 0; i < n; i++) {
        const [n1, n2] = merged[i];
        heap.insert(n1);
        sum += n1;

        if (heap.size() > k) sum -= heap.remove();
        if (heap.size() === k) result = Math.max(result, sum * n2);
    }
    return result;
};
