import fs from 'fs';
import path from 'path';
import clipboardy from 'clipboardy';
import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const API_BASE_URL = 'https://leetcode-api-pied.vercel.app';
const solutionsPath = './solutions';

const ask = async q => {
    const rl = createInterface({ input, output });
    const answer = await rl.question(`${q} `);
    rl.close();
    return answer.trim();
};

const fetchProblemData = async id => {
    const res = await fetch(`${API_BASE_URL}/problem/${id}`);
    if (!res.ok) throw new Error(`API failed: ${res.status}`);
    return res.json();
};

const main = async () => {
    try {
        const idRaw = await ask('Problem id:');
        const id = Number(idRaw);
        if (!Number.isInteger(id)) throw new Error('Invalid problem id');

        const {
            title,
            difficulty,
            titleSlug,
            topicTags = [],
            url,
        } = await fetchProblemData(id);

        const slug = title.toLowerCase().replace(/\s+/g, '-');
        const folderName = `${String(id).padStart(4, '0')}-${slug}`;
        const folderPath = path.resolve(solutionsPath, folderName);

        if (fs.existsSync(folderPath))
            throw new Error(`"${folderName}" exists`);

        fs.mkdirSync(folderPath, { recursive: true });

        const tags = topicTags
            .map(tag => (typeof tag === 'string' ? tag : tag.name))
            .filter(Boolean)
            .map(t => t.toLowerCase().replace(/\s+/g, '-'));

        const metadata = {
            id,
            title,
            difficulty,
            link: url || `https://leetcode.com/problems/${titleSlug}/`,
            tags,
        };

        fs.writeFileSync(
            path.join(folderPath, 'metadata.json'),
            JSON.stringify(metadata, null, 4)
        );

        fs.writeFileSync(
            path.join(folderPath, 'index.js'),
            `/*
 * @title: Type
 * @time: O(n)
 * @space: O(1)
 */
`);

        console.log(`✅ Created ${folderPath}`);
        clipboardy.writeSync(folderPath);
        console.log('📋 Path copied to clipboard!');
    } catch (err) {
        console.error(`❌ ${err.message}`);
        process.exit(1);
    }
};

main();
