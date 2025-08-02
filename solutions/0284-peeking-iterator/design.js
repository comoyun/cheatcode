// time: O(1)
// space: O(1)

/**
 * @param {Iterator} iterator
 */
class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.gotNext = this.iterator.hasNext();
        this.buffer = this.gotNext ? this.iterator.next() : null;
    }

    /**
     * @return {number}
     */
    peek() {
        return this.buffer;
    }

    /**
     * @return {number}
     */
    next() {
        const val = this.buffer;
        this.gotNext = this.iterator.hasNext();
        this.buffer = this.gotNext ? this.iterator.next() : null;
        return val;
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.gotNext;
    }
}

