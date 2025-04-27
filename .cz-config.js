module.exports = {
    types: [
        { value: 'solve', name: 'solve:  solution (lang)' },
        { value: 'fix', name: 'fix:  edge cases, typo, bug' },
        { value: 'perf', name: 'perf:  improve performance' },
        { value: 'docs', name: 'docs:  update docs' },
        { value: 'chore', name: 'chore:  updating grunt tasks' },
        { value: 'style', name: 'style:  reformat' },
        { value: 'refactor', name: 'refactor:  simplify code' },
    ],
    scopes: [],
    allowCustomScopes: false,
    allowBreakingChanges: false,
    skipQuestions: ['scope', 'body', 'breaking', 'footer'],
};
