// time: O(2 ** n)
// space: O(2 ** n)

/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
const findKthBit = (n, k) => {
    if (n === 1) return '0';

    const invert = arr => {
        for (let i = 0; i < arr.length; i++) arr[i] = arr[i] ? 0 : 1;
    };
    const reverse = arr => arr.reverse();

    let prev = [0];
    let curr = [];
    while (--n) {
        curr = [...prev, 1];
        invert(prev);
        reverse(prev);
        curr = [...curr, ...prev];
        prev = curr;
    }

    return curr[k - 1].toString();
};

