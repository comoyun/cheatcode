// time: O(1)
// space: O(1)

/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
const minimumCost = (cost1, cost2, costBoth, need1, need2) => {
    /*
        Key details:
            - we need to buy at least need1 and need2 items
            - need1 item costs cost1
            - need2 item costs cost2
            - one item from both need1 and need2 costs costBoth
            - find minimum cost required to get at least need1 and need2 items

        Is this greedy?

        This can be written using a formula:
        x * c1 + y * cb >= n1
        z * c2 + y * cb >= n2

        one observation is y * cb occurs in both of the equations

        we can buy n1/x and n2/z items 
        and the total cost we spent is just one combination to get it

        but that formula doesn't necessarily give minimum cost, it just gives one solution

        it makes sense to buy both items for costBoth when costBoth is smaller
        than both of them combined? but cost1 might be 1 and cost2 might be 9999,
        and costBoth might be 9998. Since cost3 is smaller than both of them combined,
        we will use cost3. But that's actually better, because it covers both needs.
        If you need to buy 1 need1 item and 1 need2 item, it costs 10,000. But you can buy
        both for 9998!

        So costBoth is used when it is cheaper than both of them combined. But what if it is cheaper than one
        of them only? lol, that was mindfart

        So take min of need1 and need2

        if costBoth is smaller than cost1 + cost2, then use costBoth to buy min items from both of them
        also subtract min from need1 and need2

        use min(cost1, costBoth) to buy need1 items
        use min(cost2, costBoth) to buy need2 items
        return overall cost
    */

    let result = 0;
    const min = Math.min(need1, need2);

    if (costBoth < cost1 + cost2) {
        result += min * costBoth;
        need1 -= min;
        need2 -= min;
    }

    result += need1 * Math.min(cost1, costBoth);
    result += need2 * Math.min(cost2, costBoth);

    return result;
};
