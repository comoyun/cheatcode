// time: O(N log N)
// space: O(log N)

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    letters = letters.sort();
    for (const letter of letters) if (letter > target) return letter;
    return letters[0];
};

// Examples:
console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'));
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z'));

