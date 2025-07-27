// time: O(n)
// space: O(1)

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = (version1, version2) => {
    version1 = version1.split('.');
    version2 = version2.split('.');

    version1 = version1.map(Number);
    version2 = version2.map(Number);

    const i = version1.length;
    const j = version2.length;
    const d = Math.abs(i - j);

    version1 = [...version1, ...new Array(d).fill(0)];
    version2 = [...version2, ...new Array(d).fill(0)];

    for (let k = 0; k < version1.length; k++) {
        const v1 = version1[k];
        const v2 = version2[k];

        if (v1 > v2) return 1;
        if (v1 < v2) return -1;
    }

    return 0;
};
