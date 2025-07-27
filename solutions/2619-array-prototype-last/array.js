// time: O(1)
// space: O(1)

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    return !this.length ? -1 : this[this.length - 1];
};
