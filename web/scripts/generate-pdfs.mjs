import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// プロジェクトのルートディレクトリ
const projectRoot = path.resolve(__dirname, '../../');
const webDir = path.resolve(projectRoot, 'web');
const pdfDir = path.resolve(projectRoot, 'pdf');

// 生成された theme.json を読み込む
const themeJsonPath = path.resolve(webDir, 'public/assets/data/theme.json');
if (!fs.existsSync(themeJsonPath)) {
  console.error(`❌ Error: theme.json not found at ${themeJsonPath}`);
  process.exit(1);
}

const themeData = JSON.parse(fs.readFileSync(themeJsonPath, 'utf-8'));

// 出力先ディレクトリの確保
const outDir = path.resolve(webDir, 'public/slides');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`📄 Generating PDFs for ${themeData.themes.length} themes...`);

for (const theme of themeData.themes) {
  const themeId = theme.id;
  console.log(`  🔄 Compiling PDF for: ${themeId}...`);
  
  // Typst に渡すための単一テーマの JSON を一時ファイルとして出力
  const tempJsonPath = path.resolve(pdfDir, 'temp_theme.json');
  fs.writeFileSync(tempJsonPath, JSON.stringify(theme, null, 2), 'utf-8');
  
  // Typst コンパイル実行
  try {
    // --font-path fonts は pdf フォルダ内にあるフォント用
    execSync('typst compile --root .. --font-path fonts presentation.typ', { 
      cwd: pdfDir, 
      stdio: 'inherit' 
    });
    
    // 生成された presentation.pdf をリネームして配置
    const generatedPdf = path.resolve(pdfDir, 'presentation.pdf');
    const destPdf = path.resolve(outDir, `${themeId}_presentation.pdf`);
    
    if (fs.existsSync(generatedPdf)) {
      fs.renameSync(generatedPdf, destPdf);
      console.log(`  ✅ Successfully created ${themeId}_presentation.pdf`);
    } else {
      console.error(`  ❌ Error: PDF file was not generated for ${themeId}`);
    }
  } catch (error) {
    console.error(`  ❌ Failed to compile PDF for ${themeId}:`, error.message);
  }
}

// 一時ファイルの削除
const tempJsonPath = path.resolve(pdfDir, 'temp_theme.json');
if (fs.existsSync(tempJsonPath)) {
  fs.unlinkSync(tempJsonPath);
}

console.log('🎉 All PDFs generated successfully!');
