#set page(
  paper: "presentation-16-9",
  margin: 0pt,
  background: rect(width: 100%, height: 100%, fill: rgb("0F172A")) // Tailwind slate-900
)

#set text(
  font: ("Noto Sans CJK JP", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "sans-serif"),
  size: 24pt,
  fill: rgb("F8FAFC") // Tailwind slate-50
)

// Helper: Custom Gradient Text
#let gradient-text(content, from: rgb("F97316"), to: rgb("EF4444")) = {
  // Typst doesn't have native gradient text yet, but we can simulate it or just use a solid vibrant color for now
  text(fill: from, weight: "bold", content)
}

// ----------------------------------------------------------------------------
// 表紙 (Title Slide)
// ----------------------------------------------------------------------------
#box(width: 100%, height: 100%, inset: 4em, [
  #v(1fr)
  #text(size: 32pt, weight: "bold", fill: rgb("F97316"))[つなげモン シリーズ]
  
  #v(1em)
  #par(leading: 1.2em)[
    #text(size: 64pt, weight: "bold")[
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
    #text(size: 32pt, weight: "bold", fill: rgb("1E293B"))[#title]
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

    #if "blocks" in theme and theme.blocks != none [
    #for block in theme.blocks [
      #if block.type == "BlockCards" [
        #slide(title: theme.title, subtitle: block.title)[
          #v(1em)
          #if "desc" in block and block.desc != "" [
            #text(size: 24pt, fill: rgb("475569"))[#block.desc]
            #v(1em)
          ]
          #if "items" in block and block.items != none [
            #grid(
              columns: (1fr, 1fr, 1fr),
              gutter: 2em,
              ..block.items.map(point => [
                #box(fill: rgb("F8FAFC"), inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
                  #if "badge" in point [
                    #text(size: 48pt, weight: "bold", fill: rgb("E2E8F0"))[#point.badge]
                    #v(-1.5em)
                  ]
                  #text(size: 24pt, weight: "bold", fill: rgb("1E293B"))[#point.title]
                  #if "subtitle" in point and point.subtitle != "" [
                    #v(0.5em)
                    #text(size: 16pt, weight: "bold", fill: rgb("C2410C"))[#point.subtitle]
                  ]
                  #if "desc" in point [
                    #v(1em)
                    #text(size: 18pt)[#point.desc]
                  ]
                ])
              ])
            )
          ]
        ]
      ] else if block.type == "BlockBeforeAfter" [
        #if "items" in block and block.items != none [
          #for (i, scenario) in block.items.enumerate() [
            #slide(title: theme.title, subtitle: block.title + " " + str(i + 1))[
              #v(1em)
              #box(fill: rgb("FFF7ED"), inset: 1em, radius: 0.5em)[
                #text(weight: "bold", fill: rgb("C2410C"))[#scenario.tag]
              ]
              #v(1em)
              #grid(
                columns: (1fr, auto, 1fr),
                align: horizon,
                gutter: 2em,
                [
                  #text(size: 20pt, fill: rgb("64748B"))[導入前]
                  #v(0.5em)
                  #text(size: 28pt, weight: "bold")[#scenario.before]
                ],
                [
                  #text(size: 40pt, fill: rgb("94A3B8"))[→]
                ],
                [
                  #text(size: 20pt, fill: rgb("64748B"))[導入後]
                  #v(0.5em)
                  #text(size: 28pt, weight: "bold", fill: rgb("10B981"))[#scenario.after]
                ]
              )
              #v(2em)
              #box(fill: rgb("F1F5F9"), inset: 2em, radius: 1em, width: 100%)[
                #text(size: 20pt)[#scenario.desc]
              ]
            ]
          ]
        ]
      ] else if block.type == "BlockFAQ" [
        #if "items" in block and block.items != none [
          #slide(title: theme.title, subtitle: block.title)[
            #v(1em)
            #grid(
              columns: (1fr),
              gutter: 1.5em,
              ..block.items.slice(0, 4).map(item => [
                #box(width: 100%, stroke: (bottom: 1pt + rgb("E2E8F0")), inset: (bottom: 1em))[
                  #text(weight: "bold", size: 20pt, fill: rgb("1E293B"))[Q. #item.q]
                  #v(0.5em)
                  #text(size: 18pt, fill: rgb("475569"))[A. #item.a]
                ]
              ])
            )
          ]
        ]
      ] else if block.type == "BlockSteps" [
        #slide(title: theme.title, subtitle: if "title" in block { block.title } else { "フロー" })[
          #v(1em)
          #if "items" in block and block.items != none [
            #grid(
              columns: (1fr),
              gutter: 1.5em,
              ..block.items.map(item => [
                #box(fill: rgb("F8FAFC"), inset: 1.5em, radius: 1em, width: 100%, [
                  #text(size: 20pt, weight: "bold", fill: rgb("1E293B"))[#item.title]
                  #v(0.5em)
                  #if "desc" in item and item.desc != none [
                    #text(size: 16pt)[#item.desc]
                  ]
                ])
              ])
            )
          ]
        ]
      ] else if block.type == "BlockTable" [
        #slide(title: theme.title, subtitle: if "title" in block { block.title } else { "比較" })[
          #v(1em)
          #if "rows" in block and block.rows != none [
            #table(
              columns: (1fr, 1fr, 1fr, 1fr, 1fr),
              align: center + horizon,
              stroke: 0.5pt + rgb("E2E8F0"),
              ..block.headers.map(h => [#text(weight:"bold", fill: rgb("475569"))[#h]]),
              ..block.rows.map(row => {
                let cells = ()
                cells.push([#text(weight:"bold")[#row.label]])
                for v in row.values {
                  cells.push([#text()[#v]])
                }
                return cells
              }).flatten()
            )
          ]
        ]
      ] else if block.type == "BlockList" [
        #slide(title: theme.title, subtitle: if "title" in block { block.title } else { "リスト" })[
          #v(1em)
          #if "items" in block and block.items != none [
            #grid(
              columns: (1fr),
              gutter: 1em,
              ..block.items.map(item => [
                #box(width: 100%, stroke: (bottom: 1pt + rgb("E2E8F0")), inset: (bottom: 0.5em))[
                  #text(weight: "bold", size: 18pt, fill: rgb("1E293B"))[#item.title]
                  #v(0.5em)
                  #if "desc" in item and item.desc != none [
                    #text(size: 14pt, fill: rgb("475569"))[#item.desc]
                  ]
                ]
              ])
            )
          ]
        ]
      ] else if block.type == "BlockCTA" [
        #slide(title: theme.title, subtitle: "次へのアクション")[
          #v(2em)
          #align(center)[
            #text(size: 32pt, weight: "bold")[#if "title" in block { block.title } else { "" }]
            #v(1em)
            #if "desc" in block and block.desc != none [
              #text(size: 20pt, fill: rgb("475569"))[#block.desc]
            ]
          ]
        ]
      ] else if block.type == "BlockComparisonCards" [
        #slide(title: theme.title, subtitle: if "title" in block { block.title } else { "相性" })[
          #v(1em)
          #if "groups" in block and block.groups != none [
            #grid(
              columns: (1fr, 1fr),
              gutter: 2em,
              ..block.groups.map(group => [
                #box(fill: if group.type == "positive" { rgb("F8FAFC") } else { rgb("FEF2F2") }, inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
                  #text(size: 24pt, weight: "bold", fill: if group.type == "positive" { rgb("0F172A") } else { rgb("991B1B") })[#group.title]
                  #v(1em)
                  #for item in group.items [
                    #text(size: 16pt)[・ #item]
                    #v(0.5em)
                  ]
                ])
              ])
            )
          ]
        ]
      ] else if block.type == "BlockText" [
        #slide(title: theme.title, subtitle: if "title" in block { block.title } else { "テキスト" })[
          #v(1em)
          #if "paragraphs" in block and block.paragraphs != none [
            #for p in block.paragraphs [
              #text(size: 18pt, fill: rgb("1E293B"))[#p]
              #v(1em)
            ]
          ]
        ]
      ]
    ]
  ]
]