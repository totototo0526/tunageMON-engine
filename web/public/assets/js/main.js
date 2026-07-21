/**
 * つなげモンシリーズ 共通スクリプト
 */

document.addEventListener('DOMContentLoaded', () => {
    // カスタムアイコンの初期化（Lucide等）
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // テーマテキストのデータ読み込み (JSONアプローチ)
    loadThemeData();
});

/**
 * theme.jsonからデータを取得してHTMLに適用する関数
 */
async function loadThemeData() {
    try {
        const response = await fetch('assets/data/theme.json');
        if (!response.ok) {
            console.warn('theme.json が見つからないか、読み込めませんでした。ローカルファイルで実行中の場合はサーバーを経由(VSCodeのLive Server等)してください。');
            return;
        }
        
        const data = await response.json();
        
        // データの適用 (例: テーマカード)
        applyThemesToDOM(data.themes);

    } catch (error) {
        console.error('データの取得に失敗しました:', error);
    }
}

/**
 * 取得したテーマデータを元にDOMを更新する
 * @param {Array} themes 
 */
function applyThemesToDOM(themes) {
    if (!themes || !Array.isArray(themes)) return;
    
    themes.forEach(theme => {
        // [data-theme-id="01"] のような要素を探し、中身を置換していく
        const container = document.querySelector(`[data-theme-id="${theme.id}"]`);
        if (!container) return;

        // タイトル
        const titleEl = container.querySelector('[data-theme-target="title"]');
        if (titleEl) titleEl.innerHTML = theme.title; // <code><span class="..."></span></code> 等を含む場合に対応するため innerHTML に
        
        // サブタイトル
        const subtitleEl = container.querySelector('[data-theme-target="subtitle"]');
        if (subtitleEl) subtitleEl.textContent = theme.subtitle;
        
        // 説明文
        const descEl = container.querySelector('[data-theme-target="description"]');
        if (descEl) descEl.innerHTML = theme.description;

        // 【bira.html用】 解決する課題
        const problemsEl = container.querySelector('[data-theme-target="problems"]');
        if (problemsEl && theme.problems) {
            problemsEl.innerHTML = theme.problems.join('<br>');
        }
    });
}
