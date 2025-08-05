import fs from 'fs';
import path from 'path';
import clipboardy from 'clipboardy';
import { createInterface } from 'readline/promises';
import { stdin, stdout } from 'node:process';
import fetch from 'node-fetch';

const CONFIG = {
    SOLUTIONS_DIR: './solutions',
    LANG_FILE: '.lang',
    GRAPHQL_ENDPOINT: 'https://leetcode.com/graphql',
    LANGUAGES: {
        javascript: { ext: 'js', comment: '//' },
        python: { ext: 'py', comment: '#' },
        python3: { ext: 'py', comment: '#' },
        cpp: { ext: 'cpp', comment: '//' },
        c: { ext: 'c', comment: '//' },
        java: { ext: 'java', comment: '//' },
        ruby: { ext: 'rb', comment: '#' },
    },
};

const ask = async question => {
    const rl = createInterface({ input: stdin, output: stdout });
    const answer = await rl.question(`${question} `);
    rl.close();
    return answer.trim();
};

const fileExists = filePath => fs.existsSync(filePath);
const readFile = filePath => fs.readFileSync(filePath, 'utf-8').trim();
const writeFile = (filePath, content) => fs.writeFileSync(filePath, content);
const createDir = dirPath => fs.mkdirSync(dirPath, { recursive: true });

const getLangPreference = async () => {
    if (fileExists(CONFIG.LANG_FILE)) {
        return readFile(CONFIG.LANG_FILE);
    }

    const langOptions = Object.keys(CONFIG.LANGUAGES).join(', ');
    const lang = await ask(`Choose language (${langOptions}):`);
    writeFile(CONFIG.LANG_FILE, lang);
    return lang;
};

const fetchGraphQL = async (query, variables) => {
    try {
        const response = await fetch(CONFIG.GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (compatible; LeetCode-CLI/1.0)',
            },
            body: JSON.stringify({ query, variables }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`GraphQL error (${response.status}): ${errorBody}`);
        }

        return response.json();
    } catch (error) {
        if (['ENOTFOUND', 'ECONNREFUSED'].includes(error.code)) {
            throw new Error('Network Error');
        }
        throw error;
    }
};

const findProblemByTitle = async titleSlug => {
    const query = `
        query questionData($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                questionFrontendId
                title
                titleSlug
                difficulty
                topicTags { slug }
                content
                exampleTestcases
                codeSnippets { langSlug code }
            }
        }`;

    const { data, errors } = await fetchGraphQL(query, { titleSlug });
    if (errors) throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);
    return data.question;
};

const findProblemById = async id => {
    console.log(`🔍 Looking for problem ID ${id}...`);

    const query = `
        query problemsetQuestionList($filters: QuestionListFilterInput) {
            problemsetQuestionList: questionList(
                categorySlug: ""
                filters: $filters
            ) {
                questions: data {
                    frontendQuestionId: questionFrontendId
                    titleSlug
                    title
                }
            }
        }`;

    const { data, errors } = await fetchGraphQL(query, {
        filters: {
            searchKeywords: id.toString(),
        },
    });
    if (errors) throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);

    const problem = data.problemsetQuestionList.questions.find(
        q => q.frontendQuestionId === id.toString()
    );

    if (!problem) {
        throw new Error(
            `Problem ${id} not found.\n💡 Try searching by problem title slug instead`
        );
    }

    console.log(`✅ Found: ${problem.title}`);
    return findProblemByTitle(problem.titleSlug);
};

const getProblemData = async input => {
    return isNaN(input) ? findProblemByTitle(input) : findProblemById(input);
};

const createSolutionFiles = (problem, langSlug, folderPath) => {
    const langConfig = CONFIG.LANGUAGES[langSlug];
    if (!langConfig) throw new Error(`Unsupported language: ${langSlug}`);

    const { ext, comment } = langConfig;
    const filePath = path.join(folderPath, `solution.${ext}`);

    const metadata = {
        id: +problem.questionId,
        title: problem.title,
        difficulty: problem.difficulty,
        link: `https://leetcode.com/problems/${problem.titleSlug}/`,
        tags: problem.topicTags.map(tag => tag.slug),
    };
    writeFile(
        path.join(folderPath, 'metadata.json'),
        JSON.stringify(metadata, null, 2)
    );

    const snippet =
        problem.codeSnippets?.find(s => s.langSlug === langSlug)?.code || '';
    const examples =
        problem.exampleTestcases
            ?.split('\n')
            .map(line => `${comment} ${line}`)
            .join('\n') || '';

    const content = [
        `${comment} time: O()`,
        `${comment} space: O()\n`,
        snippet,
        examples && `\n${comment} Examples:\n${examples}`,
    ]
        .filter(Boolean)
        .join('\n');

    writeFile(filePath, content);
};

const searchProblems = async searchTerm => {
    try {
        console.log(`🔍 Searching for problems with "${searchTerm}"...`);

        const query = `
            query problemsetQuestionList($limit: Int!, $skip: Int!, $filters: QuestionListFilterInput) {
                problemsetQuestionList: questionList(
                    categorySlug: ""
                    limit: $limit
                    skip: $skip
                    filters: $filters
                ) {
                    questions: data {
                        frontendQuestionId: questionFrontendId
                        titleSlug
                        title
                        difficulty
                    }
                }
            }`;

        const { data, errors } = await fetchGraphQL(query, {
            limit: 2000,
            skip: 0,
            filters: {},
        });
        if (errors)
            throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);

        const matches = data.problemsetQuestionList.questions
            .filter(q =>
                q.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .slice(0, 10);

        if (matches.length === 0) {
            console.log(`No problems found containing "${searchTerm}"`);
            return;
        }

        console.log('\n📋 Found problems:');
        matches.forEach(problem => {
            console.log(
                `${problem.frontendQuestionId.toString().padStart(4, ' ')}. ${problem.title} (${problem.difficulty})`
            );
        });
        console.log('\n💡 Use the number on the left as your problem ID');
    } catch (error) {
        console.error(`❌ Search error: ${error.message}`);
    }
};

const main = async () => {
    try {
        const problemInput = await ask('Enter problem id or title slug:');

        if (
            problemInput.toLowerCase().includes('search') ||
            problemInput === '?'
        ) {
            const searchTerm = await ask('Enter search term (title keywords):');
            await searchProblems(searchTerm);
            return;
        }

        const langSlug = await getLangPreference();

        console.log('🔍 Fetching problem data...');
        const problem = await getProblemData(problemInput);

        const folderName = `${problem.questionFrontendId.toString().padStart(4, '0')}-${problem.titleSlug}`;
        const folderPath = path.resolve(CONFIG.SOLUTIONS_DIR, folderName);

        if (fileExists(folderPath)) {
            throw new Error(`Solution folder already exists: ${folderName}`);
        }

        createDir(folderPath);
        createSolutionFiles(problem, langSlug, folderPath);

        clipboardy.writeSync(folderPath);
        console.log(`✅ Created: ${folderPath}\n📋 Path copied to clipboard!`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

main();
