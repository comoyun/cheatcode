/*
 * @title: Quick Sort
 * @time: O(n log n)
 * @space: O(n)
 */

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = (arr, fn) => {
    const quickSort = arr => {
        if (arr.length <= 1) return arr;

        const left = [],
            right = [],
            pivot = arr[0];

        for (let i = 1; i < arr.length; i++) {
            const num = arr[i];
            if (fn(pivot) < fn(num)) right.push(num);
            else left.push(num);
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
    };
    return quickSort(arr);
};

/* 
In-place version:
const sortBy = (arr, fn) => {
    const swap = (i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    const quickSort = (lo, hi) => {
        if (lo >= hi) return;

        const pivotVal = fn(arr[lo]);
        let i = lo + 1;

        for (let j = lo + 1; j <= hi; j++) {
            if (fn(arr[j]) < pivotVal) {
                swap(i, j);
                i++;
            }
        }

        swap(lo, i - 1);
        quickSort(lo, i - 2);
        quickSort(i, hi);
    };

    quickSort(0, arr.length - 1);
    return arr;
};
*/
