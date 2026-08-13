import fs from 'fs';
import path from 'path';

const themesDir = '/var/www/tunageMON-engine/web/src/content/themes';
const guideFiles = [
  '16-hidden-cost-guide.md',
  '17-guide-teleapo.md',
  '18-guide-wasted.md',
  '19-guide-fax.md',
  '20-guide-subscription.md',
  '21-guide-tonosama.md',
  '22-guide-apology.md'
];

for (const file of guideFiles) {
  const filePath = path.join(themesDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Add skip_default_slides: true to frontmatter
  if (!content.includes('skip_default_slides: true')) {
    content = content.replace(/^layout: "template_a"/m, 'layout: "template_a"\nskip_default_slides: true');
  }
  
  // 2. Replace "つなげモンの専門家" with "業務改善のプロ"
  content = content.replace(/つなげモンの専門家/g, '業務改善のプロ');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
