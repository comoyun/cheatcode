/*
 * @title: Index
 * @time: O((n + m) log (n + m))
 * @space: O(n + m)
 */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = (arr1, arr2) => {
    arr1.sort((a, b) => a.id - b.id);
    arr2.sort((a, b) => a.id - b.id);

    const result = [];

    const merge = (objA, objB) => {
        for (const key in objA) {
            const item = objA[key];
            if (key in objB) continue;
            objB[key] = item;
        }
        return objB;
    };

    let i = 0,
        j = 0;
    while (i < arr1.length || j < arr2.length) {
        const a = i < arr1.length ? arr1[i] : { id: Infinity },
            b = j < arr2.length ? arr2[j] : { id: Infinity };
        if (a.id < b.id) {
            result.push(a);
            i++;
            continue;
        }
        if (a.id === b.id) {
            result.push(merge(a, b));
            i++;
            j++;
            continue;
        }
        result.push(b);
        j++;
    }

    return result;
};
