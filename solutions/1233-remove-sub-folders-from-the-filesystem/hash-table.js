// time: O(n * m^2)
// space: O(n * m)

/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = folders => {
    const result = [];
    const set = new Set(folders);

    for (const folder of folders) {
        let isSubFolder = false;
        let idx = folder.lastIndexOf('/');

        while (idx > 0) {
            const parent = folder.slice(0, idx);
            if (set.has(parent)) {
                isSubFolder = true;
                break;
            }
            idx = folder.lastIndexOf('/', idx - 1);
        }

        if (!isSubFolder) result.push(folder);
    }

    return result;
};
