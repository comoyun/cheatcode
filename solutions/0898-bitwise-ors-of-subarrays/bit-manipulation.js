// time: O(n^2)
// space: O(n)

/**
 * @param {number[]} arr
 * @return {number}
 */
const subarrayBitwiseORs = arr => {
    let result = new Set();
    let prev = new Set();

    for (let num of arr) {
        let curr = new Set([num]);
        for (let p of prev) curr.add(p | num);
        prev = curr;
        for (let c of curr) result.add(c);
    }

    return result.size;
};
