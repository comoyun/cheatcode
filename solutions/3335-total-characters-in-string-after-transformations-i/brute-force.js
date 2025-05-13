/*
 * @title: Brute Force
 * @time: Exponential
 * @space: Exponential
 */

/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
const lengthAfterTransformation = (s, t) => {
    /* WARNING: This code will return TLE */

    s = s.split('').map(char => char.charCodeAt(0) - 97);
    const canDo = count => {
        for (const code of s) {
            const newCode = code + count;
            if (newCode > 25) return false;
        }
        return true;
    };
    const binarySearch = finish => {
        let left = 1,
            right = finish,
            result = 0;
        while (left <= right) {
            const mid = Math.floor((right - left) / 2) + left;
            if (canDo(mid)) {
                result = mid;
                left = mid + 1;
                continue;
            }
            right = mid - 1;
        }

        return result;
    };

    while (t) {
        const count = binarySearch(t);
        if (count) s = s.map(code => code + count);
        t -= count;

        if (t) {
            const newArr = [];
            for (const code of s) {
                const newCode = code + 1;
                if (newCode > 25) {
                    newArr.push(0);
                    newArr.push(1);
                    continue;
                }
                newArr.push(newCode);
            }
            t--;
            s = newArr;
        }
    }

    s = s.map(code => String.fromCharCode(code + 97));
    return s.length;
};

