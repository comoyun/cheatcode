// time: O(n log m + m log m)
// space: O(n)

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
const evaluate = (s, knowledge) => {
    const n = s.length;
    const result = [];
    let start = -1;

    knowledge.sort((a, b) => a[0].localeCompare(b[0]));

    const getVal = key => {
        let left = 0;
        let right = knowledge.length - 1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            const str = knowledge[mid][0];

            if (str < key) left = mid + 1;
            else if (str > key) right = mid - 1;
            else return knowledge[mid][1];
        }

        return '?';
    };

    for (let i = 0; i < n; i++) {
        const char = s[i];

        if (char === '(') {
            start = i;
            continue;
        }

        if (char === ')') {
            const key = s.slice(start + 1, i);
            result.push(getVal(key));
            start = -1;
            continue;
        }

        if (start > -1) continue;

        result.push(char);
    }

    return result.join('');
};
