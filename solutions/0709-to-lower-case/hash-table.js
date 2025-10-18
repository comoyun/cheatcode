// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = s => {
    const map = {
        A: 'a',
        B: 'b',
        C: 'c',
        D: 'd',
        E: 'e',
        F: 'f',
        G: 'g',
        H: 'h',
        I: 'i',
        J: 'j',
        K: 'k',
        L: 'l',
        M: 'm',
        N: 'n',
        O: 'o',
        P: 'p',
        Q: 'q',
        R: 'r',
        S: 's',
        T: 't',
        U: 'u',
        V: 'v',
        W: 'w',
        X: 'x',
        Y: 'y',
        Z: 'z',
    };

    s = s.split('');

    for (let i = 0; i < s.length; i++) if (s[i] in map) s[i] = map[s[i]];

    return s.join('');
};

