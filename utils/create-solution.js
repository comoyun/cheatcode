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

    tags = tags.split(' ').filter(Boolean);
    difficulty = capitalize(difficulty);

    const metadata = { id, title, difficulty, tags, link };

    const folderName = `${zeroPad(id)}-${title.toLowerCase().replaceAll(' ', '-')}`;
    const folderPath = path.resolve(solutionsPath, folderName);

    if (fs.existsSync(folderPath)) {
        console.error(`"${folderName}" already exists.`);
        process.exit(1);
    }

    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(
        path.join(folderPath, 'metadata.json'),
        JSON.stringify(metadata, null, 4),
        'utf8'
    );

    // Create index.js file
    const indexContent = `/*
 * @title: ${title}
 * @time: 
 * @space: 
 */
`;
    fs.writeFileSync(path.join(folderPath, 'index.js'), indexContent, 'utf8');

    console.log(`Created ${folderPath}/metadata.json and index.js`);
    console.log('Path copied to clipboard!');
    clipboardy.writeSync(folderPath);
};

main();
