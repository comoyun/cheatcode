// time: O(n * N)
// space: O(n * N)

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const findLexSmallestString = (s, a, b) => {
    const seen = new Set();
    const queue = [s];
    let smallest = s;

    const add = str => {
        const arr = str.split('');
        for (let i = 1; i < arr.length; i += 2)
            arr[i] = ((+arr[i] + a) % 10).toString();
        return arr.join('');
    };

    const rotate = str => str.slice(b) + str.slice(0, b);

    while (queue.length) {
        const curr = queue.shift();
        if (seen.has(curr)) continue;
        seen.add(curr);

        if (curr < smallest) smallest = curr;

        queue.push(add(curr));
        queue.push(rotate(curr));
    }

    return smallest;
};

