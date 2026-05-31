// time: O(n log n)
// space: O(1)

/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
const asteroidsDestroyed = (mass, asteroids) => {
    let size = mass;

    asteroids.sort((a, b) => a - b);

    for (const asteroid of asteroids) {
        if (asteroid > size) return false;

        size += asteroid;
    }

    return true;
};

