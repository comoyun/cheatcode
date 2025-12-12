// time: O()
// space: O()

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
    const map = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..',
    ];

    const set = new Set();

    for (const word of words) {
        const inMorse = [];

        for (const letter of word) {
            const idx = letter.charCodeAt(0) - 97;
            inMorse.push(map[idx]);
        }

        set.add(inMorse.join(''));
    }

    return set.size;
};

// Examples:
console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
console.log(uniqueMorseRepresentations(['a']));

