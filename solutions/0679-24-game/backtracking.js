// time: O(n!)
// space: O(n!)

/**
 * @param {number[]} cards
 * @return {boolean}
 */
const judgePoint24 = cards => {
    const generateExpressions = (cards, operators) => {
        const [a, b, c, d] = cards;
        const [op1, op2, op3] = operators;

        return [
            `((${a} ${op1} ${b}) ${op2} ${c}) ${op3} ${d}`,
            `(${a} ${op1} (${b} ${op2} ${c})) ${op3} ${d}`,
            `(${a} ${op1} ${b}) ${op2} (${c} ${op3} ${d})`,
            `${a} ${op1} ((${b} ${op2} ${c}) ${op3} ${d})`,
            `${a} ${op1} (${b} ${op2} (${c} ${op3} ${d}))`,
        ];
    };

    const generatePermutations = nums => {
        let result = [[]];

        for (const num of nums) {
            const newResult = [];
            for (const perm of result) {
                for (let i = 0; i <= perm.length; i++) {
                    const newPerm = [
                        ...perm.slice(0, i),
                        num,
                        ...perm.slice(i),
                    ];
                    newResult.push(newPerm);
                }
            }
            result = newResult;
        }

        return result;
    };

    const generatePaths = () => {
        const expressions = [];
        const path = [];
        const dfs = () => {
            if (path.length === 3) {
                expressions.push([...path]);
                return;
            }
            for (const op of ['+', '-', '*', '/']) {
                path.push(op);
                dfs();
                path.pop();
            }
        };
        dfs();
        return expressions;
    };

    const perms = generatePermutations(cards);
    const paths = generatePaths();

    for (const perm of perms)
        for (const path of paths)
            for (const expr of generateExpressions(perm, path))
                if (Math.abs(eval(expr) - 24) < 0.01) return true;

    return false;
};
