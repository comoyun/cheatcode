/*
 * @title: Sorting
 * @time: O(n log n)
 * @space: O(1)
 */

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = (arr, fn) => arr.sort((a, b) => fn(a) - fn(b));
