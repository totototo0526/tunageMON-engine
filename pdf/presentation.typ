#set page(
  paper: "presentation-16-9",
  margin: 0pt,
  background: rect(width: 100%, height: 100%, fill: rgb("0F172A")) // Tailwind slate-900
)

#set text(
  font: ("Inter", "Noto Sans CJK JP", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "sans-serif"),
  size: 24pt,
  fill: rgb("F8FAFC") // Tailwind slate-50
)

// Helper: Custom Gradient Text
#let gradient-text(content, from: rgb("F97316"), to: rgb("EF4444")) = {
  // Typst doesn't have native gradient text yet, but we can simulate it or just use a solid vibrant color for now
  text(fill: from, weight: "black", content)
}

// ----------------------------------------------------------------------------
// 表紙 (Title Slide)
// ----------------------------------------------------------------------------
#box(width: 100%, height: 100%, inset: 4em, [
  #v(1fr)
  #text(size: 32pt, weight: "bold", fill: rgb("F97316"), tracking: 0.1em)[つなげモン シリーズ]
  
  #v(1em)
  #par(leading: 1.2em)[
    #text(size: 64pt, weight: "black")[
      社内外の分断をなくし、\
      データの自動化を実現する。
    ]
  ]
  
  #v(2em)
  #text(size: 28pt, fill: rgb("94A3B8"))[
    あらゆるシステムと現場をシームレスにつなぐ\
    ゲートウェイ・プラットフォーム
  ]
  #v(2fr)
  
  #align(right)[
    #text(size: 20pt, fill: rgb("475569"))[提案書 (Confidential) / K-SP Co.,Ltd.]
  ]
])

#pagebreak()

// ----------------------------------------------------------------------------
// スライドレイアウト関数
// ----------------------------------------------------------------------------
#let slide(title: "", subtitle: "", body) = {
  set page(
    background: rect(width: 100%, height: 100%, fill: rgb("FFFFFF")),
    margin: (top: 5em, bottom: 3em, left: 4em, right: 4em)
  )
  set text(fill: rgb("1E293B")) // slate-800
  
  // Header
  place(top + left, dy: -3em, [
    #text(size: 32pt, weight: "black", fill: rgb("1E293B"))[#title]
    #if subtitle != "" [
      #h(1em)
      #text(size: 20pt, weight: "bold", fill: rgb("F97316"))[#subtitle]
    ]
    #v(0.5em)
    #line(length: 100%, stroke: 2pt + rgb("F97316"))
  ])
  
  box(width: 100%, height: 100%, [
    #set text(size: 24pt)
    #set par(leading: 1.5em)
    #body
  ])
  
  // Footer
  place(bottom + right, dy: 1.5em, [
    #text(size: 14pt, fill: rgb("94A3B8"))[つなげモン 営業DX化プラットフォーム]
  ])
}

// ----------------------------------------------------------------------------
// JSONデータからのスライド自動生成
// ----------------------------------------------------------------------------
#let theme-data = json("../data/theme.json")

#for theme in theme-data.themes [
  #slide(title: theme.title, subtitle: theme.subtitle)[
    #v(1em)
    
    // HTMLタグを除去してプレーンテキスト化
    #let clean-desc = theme.description.replace(regex("<[^>]+>"), "")
    #par(leading: 1.5em)[
      #text(size: 26pt, weight: "bold")[#clean-desc]
    ]
    
    #v(2em)
    
    #grid(
      columns: (1fr, 1fr),
      gutter: 2em,
      [
        #box(fill: rgb("FFF7ED"), inset: 2em, radius: 1em, width: 100%, height: 100%, [
          #text(weight: "bold", fill: rgb("C2410C"))[■ よくある課題]
          #v(1em)
          #if "problems" in theme and theme.problems != none [
            #for p in theme.problems [
              - #p
            ]
          ] else [
            - 情報の分断と二重入力
            - アナログ作業による効率低下
          ]
        ])
      ],
      [
        #box(fill: rgb("F8FAFC"), inset: 2em, radius: 1em, width: 100%, height: 100%, [
          #text(weight: "bold", fill: rgb("0F172A"))[■ つなげモンが提供する価値]
          #v(1em)
          - システムと現場をシームレスに連携
          - データの二重入力をなくし、自動化を実現
          - リアルタイムな情報共有で意思決定を加速
        ])
      ]
    )
  ]
]
