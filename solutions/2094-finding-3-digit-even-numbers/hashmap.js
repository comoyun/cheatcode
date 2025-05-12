/*
 * @title: Hashmap
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const findEvenNumbers = digits => {
    const map = {},
        result = [];

    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i];
        map[digit] = (map[digit] || 0) + 1;
    }

    for (let i = 100; i < 1000; i += 2) {
        let add = true;
        const a = Math.floor(i / 100),
            b = Math.floor(i / 10) % 10,
            c = i % 10,
            m = {},
            arr = [a, b, c];
        for (const digit of arr) m[digit] = (m[digit] || 0) + 1;
        for (const key in m) {
            if (!(key in map) || map[key] < m[key]) {
                add = false;
                break;
            }
        }
        if (add) result.push(i);
    }

    return result;
};

