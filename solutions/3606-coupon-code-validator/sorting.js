// time: O(n)
// space: O(n)

/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
const validateCoupons = (code, businessLine, isActive) => {
    const bus = {
        electronics: [],
        grocery: [],
        pharmacy: [],
        restaurant: [],
    };

    for (let i = 0; i < code.length; i++) {
        const c = code[i];
        const b = businessLine[i];
        const a = isActive[i];

        if (!a) continue;
        if (!(b in bus)) continue;
        if (!/^[A-Za-z0-9_]+$/.test(c)) continue;

        bus[b].push(c);
    }

    bus.electronics.sort();
    bus.grocery.sort();
    bus.pharmacy.sort();
    bus.restaurant.sort();

    return [
        ...bus.electronics,
        ...bus.grocery,
        ...bus.pharmacy,
        ...bus.restaurant,
    ];
};

