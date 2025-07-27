![CheatCode](https://github.com/user-attachments/assets/a7597903-8839-4799-9d79-cc90bb613adf)

# About

This repository contains solutions to LeetCode problems I've solved as part of my preparation for interviews with FAANG (Facebook, Amazon, Apple, Netflix, Google) and other tech companies. The goal is to document my progress and learn from the solutions shared by the community.

# File Tree

Each solution is stored in its own folder inside `/solutions/`. Each folder has different ways to solve the same problem, in multiple languages.

```
solutions/
  0001-two-sum/
    ├─ brute-force.c
    ├─ hashmap.c
    ├─ backtrack.c
    ├─ backtrack.js
    ├─ two-pointers.py
    └─ metadata.json
```

`metadata.json` includes the problem ID, title, tags, difficulty, and a link to the LeetCode problem (used for analysis, generating reports, and supporting the web interface). Example:

```json
{
    "id": 1,
    "title": "Two Sum",
    "difficulty": "Easy",
    "tags": ["hash-table", "array", "brute-force", "two-pointers"],
    "link": "https://leetcode.com/problems/two-sum/description/"
}
```

**Files and folders** are named using kebab-case (e.g., `brute-force.js`, `two-pointers.py`). Each solution file starts with a single-line comment declaring time and space complexity, like:

```js
// time: O(n)
// space: O(n)
```

The comment style (`//`, `#`, etc.) is automatically chosen based on the language -- if you use `create-solution.js` utility function. No need for a title in the comment — the filename already makes the approach obvious.

# Utilities

I usually work in the terminal, so I made some CLI tools to make things easier.
They're all in the `/utils/` folder and follow the Unix rule: small tools that do one thing well.
You can run them from the project root using `npm run <script>`

- `create-problem`: makes a new folder with starter files for a problem.
- `parse-metadata`: collects info from all problems and puts it into one index.
- `generate-table`: builds the solutions table and updates 'solutions.md'.

# Commit Format

We **enforce strict commit naming**. Use the following format:

```
solve: 0001 (js)       # New solution
fix: handle edge case  # Fix an error
perf: optimize logic   # Improve time/space complexity
docs: update readme    # Documentation only
chore: update deps     # Maintenance, dependencies
style: reformat code   # Code style changes
refactor: simplify     # No behavior change
```

Run `npm install` to install Commitizen. It reads this config to enforce the format.
Use `git cz` to commit with the correct format automatically.

# Contributing

Want to contribute? Great. Please follow these rules:

0. **Star the repo**
1. **Strictly follow file and folder naming conventions.**
2. **Include the header comment** in all solution files.
3. **Update or add `metadata.json`**. You can use utility functions to help with this.
4. **Write clean, readable code.**

Note that if you are not sure about time and space complexity of your solution, you can click on "Analyze Complexity" on LeetCode submissions tab:

![image](https://github.com/user-attachments/assets/a74b3393-d414-4b04-8b94-0e313602769e)

# Disclaimer

This repository is shared for collaboration and learning. Copying and pasting code directly without understanding it is discouraged. Use these solutions as references and focus on understanding the reasoning behind each implementation.
