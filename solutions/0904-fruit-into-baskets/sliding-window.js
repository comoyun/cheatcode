// time: O(n)
// space: O(n)

/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = fruits => {
    const map = {};
    let count = 0;
    let result = 0;

    let left = 0;
    let right = 0;

    for (; right < fruits.length; right++) {
        const num = fruits[right];

        if (num in map && map[num] > 0) {
            map[num]++;
        } else {
            map[num] = 1;
            count++;

            while (count > 2) {
                const n = fruits[left++];
                if (--map[n] === 0) count--;
            }
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};

