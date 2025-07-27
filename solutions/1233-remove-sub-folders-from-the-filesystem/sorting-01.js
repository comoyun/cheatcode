// time: O(n log n)
// space: O(n)

/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = folder => {
    const n = folder.length;
    const result = [];
    let i = 0;
    folder.sort();

    /*

    if you don't want to use startsWith

    const match = (parent, child) => {
        parent = parent.split('/');
        child = child.split('/');

        for (let i = 0; i < parent.length; i++)
            if (parent[i] !== child[i]) return false;

        return true;
    };
    */

    while (i < n) {
        let count = 1;
        const curr = folder[i];
        result.push(curr);

        while (i + count < n && folder[i + count].startsWith(curr + '/'))
            count++;

        i += count;
    }

    return result;
};
