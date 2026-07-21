import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const themesDir = path.join(__dirname, '../src/content/themes');
const dataDir = path.join(__dirname, '../../data');

// Ensure data dir exists
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const files = fs.readdirSync(themesDir).filter(f => f.endsWith('.md'));

// We want to sort them by filename (01-portal.md, 02-window.md, etc)
files.sort();

const themes = [];

for (const file of files) {
    const filePath = path.join(themesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract frontmatter
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (match) {
        try {
            const frontmatter = yaml.load(match[1]);
            // Web body (everything after frontmatter)
            const body = content.slice(match[0].length).trim();
            
            // For typst, we preserve the exact frontmatter structure
            // Plus, if we want to extract the body and store it as description or something, we can.
            // But actually, `description` is part of frontmatter currently in our design.
            
            themes.push(frontmatter);
        } catch (e) {
            console.error(`Error parsing frontmatter in ${file}:`, e);
        }
    }
}

const output = { 
    _WARNING: "⚠️このファイルは自動生成されています。直接編集しないでください！ データを追加・変更する場合は、web/src/content/themes/ のMarkdownファイルを編集してください。",
    themes 
};
const jsonOutput = JSON.stringify(output, null, 2);

// Write to master data folder for Typst
fs.writeFileSync(path.join(dataDir, 'theme.json'), jsonOutput);
console.log(`✅ Generated data/theme.json from ${files.length} Markdown files.`);

// Also copy to web/public/assets/data for client-side JS fallback (bira.html)
const publicDataDir = path.join(__dirname, '../public/assets/data');
if (fs.existsSync(publicDataDir)) {
    fs.writeFileSync(path.join(publicDataDir, 'theme.json'), jsonOutput);
    console.log(`✅ Copied theme.json to web/public/assets/data/.`);
}
