import fs from 'fs';
import path from 'path';

const themesDir = '/var/www/tunageMON-engine/web/src/content/themes';

const data = {
  '16-hidden-cost-guide.md': {
    problems: `problems:
  - title: "システム導入は「コスト」だという誤解"
    description: "目の前の出費を嫌いアナログ作業を続けることで、実は毎月膨大な人件費をドブに捨てています。"
  - title: "見えない赤字の蓄積"
    description: "入力ミス、確認待ち、クレーム対応など、表面化しない「隠れたムダ」が利益を圧迫しています。"`,
    values: `values:
  - "見えない赤字を可視化し、根本から断ち切る"
  - "属人化を排除し、誰でも同じ成果を出せる体制へ"
  - "システムの力を借りて、本来の「稼ぐ業務」に集中"`
  },
  '17-guide-teleapo.md': {
    problems: `problems:
  - title: "自社架電による「見えない機会損失」"
    description: "エース級の社員がリスト架電に時間を奪われ、本来の商談（クロージング）に集中できていません。"
  - title: "モチベーション低下と離職リスク"
    description: "断られ続けるストレスが営業担当者を疲弊させ、最悪の場合、離職につながる恐れがあります。"`,
    values: `values:
  - "アポイント獲得をプロに任せ、営業は商談に専念"
  - "自社架電による社員の疲弊と離職リスクをゼロに"
  - "システム連携により、獲得したアポをシームレスに引き継ぎ"`
  },
  '18-guide-wasted.md': {
    problems: `problems:
  - title: "毎日繰り返される「探し物」と「手作業」"
    description: "資料探しやコピペ作業など、1日あたり数時間の「ムダ時間」が全社員に発生しています。"
  - title: "チリツモで膨れ上がる見えない人件費"
    description: "1人1日1時間のムダでも、年間・全社員で計算すると数百万円〜数千万円規模の赤字になります。"`,
    values: `values:
  - "散在する情報を一元化し、「探す時間」をゼロに"
  - "手作業のコピペや二重入力を自動化し、ミスを撲滅"
  - "浮いた時間を、顧客との対話や付加価値の創造へシフト"`
  },
  '19-guide-fax.md': {
    problems: `problems:
  - title: "アナログな紙文化による非効率の極み"
    description: "FAXの送受信、仕分け、手入力、ファイリングなど、紙特有の煩雑な作業が業務を圧迫しています。"
  - title: "誤入力や紛失などのヒューマンエラー"
    description: "手作業による転記ミスや、FAX用紙の紛失・見落としが、重大なクレームにつながる危険性があります。"`,
    values: `values:
  - "FAXや紙ベースのやり取りをデジタル化・ペーパーレス化"
  - "受注から社内システムへの入力を自動連係し、ミスを防止"
  - "場所にとらわれない働き方（テレワーク等）の実現を支援"`
  },
  '20-guide-subscription.md': {
    problems: `problems:
  - title: "使っていない機能への無駄な支出"
    description: "パッケージ型のサブスクツールを導入したものの、自社に合わず一部の機能しか使えていません。"
  - title: "業務に合わせた柔軟なカスタマイズが困難"
    description: "既存のシステムに業務を合わせることを強いられ、逆に現場の負担やストレスが増加しています。"`,
    values: `values:
  - "自社の業務フローにジャストフィットする専用システムを構築"
  - "不要な機能を削ぎ落とし、本当に必要な機能だけを提供"
  - "段階的な拡張が可能で、無駄のないIT投資を実現"`
  },
  '21-guide-tonosama.md': {
    problems: `problems:
  - title: "「顧客のため」が引き起こす自己犠牲"
    description: "良かれと思ってやっている無償の特別対応や手作業が、実は会社の利益を大きく削っています。"
  - title: "属人化によるスケールアップの限界"
    description: "特定の担当者にしかできない「神対応」に依存しているため、事業を拡大することができません。"`,
    values: `values:
  - "業務フローを標準化し、誰でも高品質な対応が可能な仕組みへ"
  - "無駄な手作業を自動化し、利益の出る「適正なサービス」を実現"
  - "顧客満足度を維持しながら、しっかりと利益を残す体質へ改善"`
  },
  '22-guide-apology.md': {
    problems: `problems:
  - title: "1件のクレームの裏にある「隠れたミス」"
    description: "表面化したクレームの裏には、ヒヤリハットや確認の手間など、大量の「見えないエラー」が潜んでいます。"
  - title: "謝罪とリカバリーに奪われる莫大な時間"
    description: "ミスが発生するたびに、原因究明や謝罪、再発防止策の策定に多大な時間と精神力を消耗しています。"`,
    values: `values:
  - "システムによる自動チェックで、人為的なミスを未然に防止"
  - "属人的な作業を減らし、安定した品質の業務オペレーションを構築"
  - "謝罪やリカバリーに奪われていた時間を、前向きな業務へ還元"`
  }
};

for (const [file, custom] of Object.entries(data)) {
  const filePath = path.join(themesDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove skip_default_slides: true
  content = content.replace(/^skip_default_slides: true\n/m, '');
  
  // Remove existing problems block if any (for safety, though they shouldn't have one)
  // Actually, we'll just insert it before blocks:
  if (!content.includes('problems:')) {
    content = content.replace(/^blocks:/m, `${custom.problems}\n${custom.values}\nblocks:`);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
