import fs from 'fs';
import path from 'path';

const themesDir = '/var/www/tunageMON-engine/web/src/content/themes';

const replacements = {
  '16-hidden-cost-guide.md': [
    ['1. 視覚化された「見えないコスト」の真実', '1. 「見えないコスト」の真実']
  ],
  '17-guide-teleapo.md': [
    ['1. 自社架電が引き起こす「負のループ」', '1. 自社架電の「負のループ」']
  ],
  '18-guide-wasted.md': [
    ['1. 毎日蓄積される「ムダ時間」の恐怖', '1. 蓄積されるムダ時間の恐怖']
  ],
  '19-guide-fax.md': [
    // 17 chars, maybe okay, but let's shorten:
    ['1. FAX継続による「社内の疲弊」', '1. FAXによる「社内の疲弊」']
  ],
  '20-guide-subscription.md': [
    ['1. 売り切りモデルの限界とサブスクの罠', '1. 売り切りの限界とサブスクの罠']
  ],
  '21-guide-tonosama.md': [
    ['1. 善意が裏目に出る「隠れ赤字」の構造', '1. 善意による「隠れ赤字」の構造']
  ],
  '22-guide-apology.md': [
    ['1. ハインリッヒの法則と「エラーの氷山」', '1. ハインリッヒの法則とエラーの氷山']
  ]
};

for (const [file, reps] of Object.entries(replacements)) {
  const filePath = path.join(themesDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [oldT, newT] of reps) {
    content = content.replace(oldT, newT);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
