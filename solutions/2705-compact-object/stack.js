/*
 * @title: Stack
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = obj => {
    const stack = [obj];
    while (stack.length) {
        const curr = stack.pop();

        const isArr = Array.isArray(curr);
        let ptr = 0;
        for (const key in curr) {
            const item = curr[key];
            if (!item) {
                delete curr[key];
                continue;
            }
            if (Array.isArray(item) || typeof item === 'object')
                stack.push(item);
            if (isArr) curr[ptr++] = item;
        }
        if (isArr) curr.length = ptr;
    }
    return obj;
};
