/*
 * @title: Array
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const flat = (arr, n) => {
    const result = [];
    const dfs = (arr, level) => {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (Array.isArray(item) && level - 1 >= 0) dfs(item, level - 1);
            else result.push(item);
        }
    };
    dfs(arr, n);
    return result;
};
