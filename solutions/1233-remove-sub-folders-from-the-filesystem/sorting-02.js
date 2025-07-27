// time: O(n log n)
// space: O(n)

/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = folder => {
    folder.sort();
    const result = [folder[0]];
    for (let i = 1; i < folder.length; i++) {
        const last = result.at(-1) + '/';
        const current = folder[i];
        if (!current.startsWith(last)) result.push(current);
    }
    return result;
};
