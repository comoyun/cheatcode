/*
 * @title: Merge Sort
 * @time: O(n log n)
 * @space: O(n)
 */

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = (arr, fn) => {
    const merge = (l1, r1, l2, r2) => {
        const temp = [];
        let i = l1,
            j = l2;

        while (i <= r1 && j <= r2) {
            if (fn(arr[i]) < fn(arr[j])) temp.push(arr[i++]);
            else temp.push(arr[j++]);
        }

        while (i <= r1) temp.push(arr[i++]);
        while (j <= r2) temp.push(arr[j++]);

        for (let k = 0; k < temp.length; k++) arr[l1 + k] = temp[k];
    };
    const mergeSort = (left, right) => {
        if (left >= right) return;

        const mid = left + Math.floor((right - left) / 2);
        mergeSort(left, mid);
        mergeSort(mid + 1, right);
        merge(left, mid, mid + 1, right);
        return arr;
    };

    return mergeSort(0, arr.length - 1);
};
