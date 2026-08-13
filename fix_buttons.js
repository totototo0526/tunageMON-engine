const fs = require('fs');
const glob = require('glob');

const files = glob.sync('/var/www/tunageMON-engine/web/src/components/react/*Calculator.tsx');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // We want to replace the flex container and its two buttons
  // The structure is roughly:
  // <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-2">
  //   <a href="/slides/XX_presentation.pdf" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[COLOR]-500 hover:bg-[COLOR]-400 text-white font-[bold|black] py-[3|4] px-[6|8] rounded-[full|xl] shadow-lg transition-transform transform hover:-translate-y-1">
  //     TEXT
  //     <svg ...></svg>
  //   </a>
  //   <a href="https://www.k-sp.co.jp/admin/std/contact/new" className="...">
  //     無料で相談する
  //   </a>
  // </div>

  // Regex to match the whole block
  const regex = /<div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-2">([\s\S]*?)<\/div>/;
  
  const match = content.match(regex);
  if (match) {
    let innerLinks = match[1];
    
    // For the first button, we want to replace `w-full sm:w-auto` with `w-full`, and add `!text-white`
    innerLinks = innerLinks.replace(/className="([^"]*?)w-full sm:w-auto([^"]*?)"/, 'className="$1w-full text-[14px] sm:text-base !text-white !no-underline$2"');
    
    // For the second button, we replace it completely for consistency.
    // Let's find the URL of the first button to preserve it.
    const urlMatch = innerLinks.match(/href="([^"]+)"/);
    if (urlMatch) {
      // Re-create the block
      const newBlock = `<div className="flex flex-col gap-3 w-full max-w-sm mx-auto mt-6">
${innerLinks.split('<a href="https://www.k-sp.co.jp')[0]}
  <a href="https://www.k-sp.co.jp/admin/std/contact/new" className="inline-flex w-full items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 !text-white !no-underline border border-slate-500 font-bold py-3 px-6 rounded-full transition-all">
    無料で相談する
  </a>
</div>`;
      
      content = content.replace(regex, newBlock);
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  }
}
