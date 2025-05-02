/*
 * @title: Two Pointers
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = s => {
    const n = s.length,
        arr = s.split(''),
        left = Array(n),
        right = Array(n);
    let l = null,
        r = null;

    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] === 'L') l = i;
        if (arr[i] === 'R') l = null;
        left[i] = l;
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] === 'R') r = i;
        if (arr[i] === 'L') r = null;
        right[i] = r;
    }

    for (let i = 0; i < n; i++) {
        l = left[i];
        r = right[i];
        if (l === null && r === null) continue;
        if (l === null) {
            arr[i] = 'R';
            continue;
        }
        if (r === null) {
            arr[i] = 'L';
            continue;
        }
        const dl = l - i,
            dr = i - r;
        if (dr < dl) arr[i] = 'R';
        else if (dr > dl) arr[i] = 'L';
        else arr[i] = '.';
    }

    return arr.join('');
};
