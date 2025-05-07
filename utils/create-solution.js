import fs from 'fs';
import clipboardy from 'clipboardy';
import path from 'path';
import { createInterface } from 'node:readline';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ask = q =>
    new Promise(res => readline.question(`${q} `, a => res(a.trim())));

const zeroPad = num => String(num).padStart(4, '0');
const capitalize = str =>
    str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';

const solutionsPath = './solutions';

const main = async () => {
    let id = await ask('Problem id:');
    let title = await ask('Problem title:');
    let difficulty = await ask('Problem difficulty:');
    let tags = await ask('Problem tags (space separated):');
    let link = await ask('Problem link:');

    readline.close();

    id = parseInt(id);
    if (Number.isNaN(id)) {
        console.error('Invalid problem id');
        process.exit(1);
    }

    const tagList = tags.split(' ').filter(Boolean);
    const tag = tagList[0]?.toLowerCase() || 'index';
    const tagTitle = capitalize(tag);
    difficulty = capitalize(difficulty);

    const metadata = { id, title, difficulty, link };

    const slug = title.toLowerCase().trim().replaceAll(/\s+/g, '-');
    const folderName = `${zeroPad(id)}-${slug}`;
    const folderPath = path.resolve(solutionsPath, folderName);

    if (fs.existsSync(folderPath)) {
        console.error(`"${folderName}" already exists.`);
        process.exit(1);
    }

    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(
        path.join(folderPath, 'metadata.json'),
        JSON.stringify(metadata, null, 2),
        'utf8'
    );

    const header = `/*
 * @title: ${tagTitle}
 * @time: O(n)
 * @space: O(n)
 */
`;

    const fileName = `${tag}.js`;
    fs.writeFileSync(path.join(folderPath, fileName), header, 'utf8');

    console.log(
        `Created:\n  ${folderPath}/metadata.json\n  ${folderPath}/${fileName}`
    );
    clipboardy.writeSync(folderPath);
    console.log('Path copied to clipboard!');
};

main();
