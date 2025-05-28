/*
 * @title: Hashmap
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const result = {};
    for (const n of this) {
        const key = fn(n);
        result[key] = (result[key] || []);
        result[key].push(n);
    }
    return result;
};
