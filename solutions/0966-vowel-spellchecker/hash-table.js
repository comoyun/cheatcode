// time: O()
// space: O()

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
const spellchecker = (wordlist, queries) => {
    const exact = new Set(wordlist);
    const lower = new Map();
    const devowel = new Map();

    const dv = w => w.toLowerCase().replace(/[aeiou]/g, '*');

    for (const w of wordlist) {
        const lw = w.toLowerCase();
        if (!lower.has(lw)) lower.set(lw, w);
        const dw = dv(w);
        if (!devowel.has(dw)) devowel.set(dw, w);
    }

    return queries.map(q =>
        exact.has(q)
            ? q
            : lower.get(q.toLowerCase()) || devowel.get(dv(q)) || ''
    );
};
