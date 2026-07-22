#set page(
  paper: "presentation-16-9",
  margin: 0pt,
  background: rect(width: 100%, height: 100%, fill: rgb("0F172A")) // Tailwind slate-900
)

#set text(
  font: ("Noto Sans CJK JP", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "sans-serif"),
  size: 18pt,
  fill: rgb("F8FAFC") // Tailwind slate-50
)

// Helper: Custom Gradient Text
#let gradient-text(content, from: rgb("F97316"), to: rgb("EF4444")) = {
  // Typst doesn't have native gradient text yet, but we can simulate it or just use a solid vibrant color for now
  text(fill: from, weight: "bold", content)
}

// Helper: Array chunks function
#let chunks(arr, size) = {
  let res = ()
  let i = 0
  while i < arr.len() {
    res.push(arr.slice(i, calc.min(i + size, arr.len())))
    i += size
  }
  return res
}

// Helper: String truncate function (Not used for now to avoid multibyte slice issues, but kept for compatibility)
#let truncate(s, max-len: 80) = {
  if s == none { return "" }
  return s
}

// ----------------------------------------------------------------------------
// 表紙 (Title Slide)
// ----------------------------------------------------------------------------
#box(width: 100%, height: 100%, inset: 4em, [
  #v(1fr)
  #text(size: 28pt, weight: "bold", fill: rgb("F97316"))[つなげモン シリーズ]
  
  #v(1em)
  #par(leading: 1.2em)[
    #text(size: 48pt, weight: "bold")[
      社内外の分断をなくし、\
      データの自動化を実現する。
    ]
  ]
  
  #v(2em)
  #text(size: 20pt, fill: rgb("94A3B8"))[
    あらゆるシステムと現場をシームレスにつなぐ\
    ゲートウェイ・プラットフォーム
  ]
  #v(2fr)
  
  #align(right)[
    #text(size: 14pt, fill: rgb("475569"))[提案書 (Confidential) / K-SP Co.,Ltd.]
  ]
])

#pagebreak()

// ----------------------------------------------------------------------------
// スライドレイアウト関数
// ----------------------------------------------------------------------------
#let slide(title: "", subtitle: "", body) = {
  set page(
    background: rect(width: 100%, height: 100%, fill: rgb("FFFFFF")),
    margin: (top: 4.5em, bottom: 2em, left: 3em, right: 3em)
  )
  set text(fill: rgb("1E293B")) // slate-800
  
  // Header
  place(top + left, dy: -3.5em, [
    #text(size: 24pt, weight: "bold", fill: rgb("1E293B"))[#title]
    #if subtitle != "" [
      #h(1em)
      #text(size: 16pt, weight: "bold", fill: rgb("F97316"))[#subtitle]
    ]
    #v(0.5em)
    #line(length: 100%, stroke: 2pt + rgb("F97316"))
  ])
  
  box(width: 100%, height: 100%, [
    #set text(size: 16pt)
    #set par(leading: 1.25em) // 行間を少し詰める
    #body
  ])
  
  // Footer
  place(bottom + right, dy: 1em, [
    #text(size: 10pt, fill: rgb("94A3B8"))[つなげモン 営業DX化プラットフォーム]
  ])
}

// ----------------------------------------------------------------------------
// JSONデータからのスライド自動生成 (単一テーマ対応)
// ----------------------------------------------------------------------------
#let theme = json("temp_theme.json")

#slide(title: theme.title, subtitle: theme.subtitle)[
  #v(1em)
  
  // HTMLタグを除去してプレーンテキスト化
  #let clean-desc = theme.description.replace(regex("<[^>]+>"), "")
  #par(leading: 1.3em)[
    #text(size: 18pt, weight: "bold")[#clean-desc]
  ]
  
  #v(1.5em)
  
  #grid(
    columns: (1fr, 1fr),
    gutter: 2em,
    [
      #box(fill: rgb("FFF7ED"), inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
        #text(weight: "bold", fill: rgb("C2410C"))[■ よくある課題]
        #v(1em)
        #set text(size: 13pt)
        #if "problems" in theme and theme.problems != none [
          #for p in theme.problems [
            #text(weight: "bold")[・ #p.title] \
            #text(fill: rgb("475569"))[#p.description]
            #v(1em)
          ]
        ] else [
          - 情報の分断と二重入力
          - アナログ作業による効率低下
        ]
      ])
    ],
    [
      #box(fill: rgb("F8FAFC"), inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
        #text(weight: "bold", fill: rgb("0F172A"))[■ つなげモンが提供する価値]
        #v(1em)
        #set text(size: 13pt)
        ・ システムと現場をシームレスに連携 \
        #v(1em)
        ・ データの二重入力をなくし、自動化を実現 \
        #v(1em)
        ・ リアルタイムな情報共有で意思決定を加速 \
      ])
    ]
  )
]

#if "blocks" in theme and theme.blocks != none [
  #for block in theme.blocks [
  
    // ----------------------------------------------------------------------------
    // BlockCards
    // ----------------------------------------------------------------------------
    #if block.type == "BlockCards" [
      #if "items" in block and block.items != none [
        #let chunked = chunks(block.items, 3)
        #for (i, c) in chunked.enumerate() [
          #let sub = block.title
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #if "desc" in block and block.desc != "" and i == 0 [
              #text(size: 14pt, fill: rgb("475569"))[#block.desc]
              #v(1em)
            ]
            #grid(
              columns: (1fr, 1fr, 1fr),
              gutter: 1.5em,
              ..c.map(point => [
                #box(fill: rgb("F8FAFC"), inset: 1.2em, radius: 1em, width: 100%, height: 100%, [
                  #if "badge" in point [
                    #text(size: 32pt, weight: "bold", fill: rgb("E2E8F0"))[#point.badge]
                    #v(-1.5em)
                  ]
                  #text(size: 16pt, weight: "bold", fill: rgb("1E293B"))[#point.title]
                  #if "subtitle" in point and point.subtitle != "" [
                    #v(0.5em)
                    #text(size: 13pt, weight: "bold", fill: rgb("C2410C"))[#point.subtitle]
                  ]
                  #if "desc" in point [
                    #v(1em)
                    #text(size: 13pt)[#point.desc]
                  ]
                ])
              ])
            )
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockBeforeAfter
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockBeforeAfter" [
      #if "items" in block and block.items != none [
        #let chunked = chunks(block.items, 1)
        #for (i, c) in chunked.enumerate() [
          #let sub = block.title
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #for scenario in c [
              #box(fill: rgb("FFF7ED"), inset: 0.8em, radius: 0.5em)[
                #text(size: 14pt, weight: "bold", fill: rgb("C2410C"))[#scenario.tag]
              ]
              #v(1em)
              #grid(
                columns: (1fr, auto, 1fr),
                align: horizon,
                gutter: 1.5em,
                [
                  #text(size: 14pt, fill: rgb("64748B"))[導入前]
                  #v(0.5em)
                  #text(size: 18pt, weight: "bold")[#scenario.before]
                ],
                [
                  #text(size: 24pt, fill: rgb("94A3B8"))[→]
                ],
                [
                  #text(size: 14pt, fill: rgb("64748B"))[導入後]
                  #v(0.5em)
                  #text(size: 18pt, weight: "bold", fill: rgb("10B981"))[#scenario.after]
                ]
              )
              #v(1.5em)
              #box(fill: rgb("F1F5F9"), inset: 1.5em, radius: 0.5em, width: 100%)[
                #text(size: 14pt)[#scenario.desc]
              ]
            ]
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockChatDemo
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockChatDemo" [
      #if "patterns" in block and block.patterns != none [
        #let chunked = chunks(block.patterns, 1)
        #for (i, c) in chunked.enumerate() [
          #let sub = block.title
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #grid(
              columns: (1fr),
              gutter: 1em,
              ..c.map(pattern => [
                #box(fill: rgb("F8FAFC"), inset: 1.2em, radius: 1em, width: 100%, height: 100%, [
                  #text(size: 16pt, weight: "bold", fill: rgb("1E293B"))[#pattern.label: #pattern.title]
                  #v(1em)
                  #for msg in pattern.messages [
                    #if msg.senderType == "user" [
                      #box(fill: rgb("E2E8F0"), inset: 0.8em, radius: 0.5em, width: 85%)[
                        #text(size: 12pt, weight: "bold")[#msg.senderName]
                        #v(0.3em)
                        #text(size: 14pt)[#if "prefix" in msg { [#text(fill: rgb("64748B"))[#msg.prefix] ] } #msg.text]
                      ]
                    ] else [
                      #align(right)[
                        #box(fill: rgb("FFF7ED"), stroke: 1pt + rgb("F97316"), inset: 0.8em, radius: 0.5em, width: 85%)[
                          #align(left)[
                            #text(size: 12pt, weight: "bold", fill: rgb("C2410C"))[#msg.senderName]
                            #v(0.3em)
                            #text(size: 14pt)[#msg.text]
                          ]
                        ]
                      ]
                    ]
                    #v(0.8em)
                  ]
                ])
              ])
            )
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockReasoningGrid
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockReasoningGrid" [
      #if "items" in block and block.items != none [
        #let chunked = chunks(block.items, 2) // ★1スライド2件に変更
        #for (i, c) in chunked.enumerate() [
          #let sub = block.title
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #grid(
              columns: (1fr, 1fr), // ★2列に変更（横幅を広げる）
              gutter: 1.5em,
              ..c.map(item => [
                #box(stroke: 1pt + rgb("E2E8F0"), inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
                  #text(weight: "bold", size: 14pt, fill: rgb("C2410C"))[#item.num]
                  #v(0.5em)
                  #text(weight: "bold", size: 16pt)[#item.title]
                  #v(0.8em)
                  #text(size: 13pt)[#item.desc]
                ])
              ])
            )
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockFAQ
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockFAQ" [
      #if "items" in block and block.items != none [
        #let chunked = chunks(block.items, 2)
        #for (i, c) in chunked.enumerate() [
          #let sub = block.title
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #grid(
              columns: (1fr),
              gutter: 1.5em,
              ..c.map(item => [
                #box(width: 100%, stroke: (bottom: 1pt + rgb("E2E8F0")), inset: (bottom: 1.2em))[
                  #text(weight: "bold", size: 16pt, fill: rgb("1E293B"))[Q. #item.q]
                  #v(0.5em) // ★余白を詰める
                  #text(size: 14pt, fill: rgb("475569"))[A. #item.a]
                ]
              ])
            )
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockSteps
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockSteps" [
      #if "items" in block and block.items != none [
        #let chunked = chunks(block.items, 3)
        #for (i, c) in chunked.enumerate() [
          #let t = if "title" in block { block.title } else { "フロー" }
          #let sub = t
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #grid(
              columns: (1fr),
              gutter: 1em,
              ..c.map(item => [
                #box(fill: rgb("F8FAFC"), inset: 1.2em, radius: 0.5em, width: 100%, [
                  #text(size: 16pt, weight: "bold", fill: rgb("1E293B"))[#item.title]
                  #v(0.5em)
                  #if "desc" in item and item.desc != none [
                    #text(size: 14pt)[#item.desc]
                  ]
                ])
              ])
            )
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockTable
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockTable" [
      #let t = if "title" in block { block.title } else { "比較" }
      #slide(title: theme.title, subtitle: t)[
        #v(1em)
        #if "rows" in block and block.rows != none [
          #set text(size: 12pt)
          #let cols = block.headers.len()
          #table(
            columns: array.range(0, cols).map(x => 1fr),
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
      
    // ----------------------------------------------------------------------------
    // BlockList
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockList" [
      #if "items" in block and block.items != none [
        #let chunked = chunks(block.items, 3)
        #for (i, c) in chunked.enumerate() [
          #let t = if "title" in block { block.title } else { "リスト" }
          #let sub = t
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #grid(
              columns: (1fr),
              gutter: 1.5em,
              ..c.map(item => [
                #box(width: 100%, stroke: (bottom: 1pt + rgb("E2E8F0")), inset: (bottom: 1em))[
                  #text(weight: "bold", size: 16pt, fill: rgb("1E293B"))[#item.title]
                  #v(0.5em)
                  #if "desc" in item and item.desc != none [
                    #text(size: 14pt, fill: rgb("475569"))[#item.desc]
                  ]
                ]
              ])
            )
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockCTA
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockCTA" [
      #slide(title: theme.title, subtitle: "次へのアクション")[
        #v(3em)
        #align(center)[
          #text(size: 24pt, weight: "bold")[#if "title" in block { block.title } else { "" }]
          #v(1.5em)
          #if "desc" in block and block.desc != none [
            #text(size: 16pt, fill: rgb("475569"))[#block.desc]
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockComparisonCards
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockComparisonCards" [
      #if "groups" in block and block.groups != none [
        #let t = if "title" in block { block.title } else { "相性" }
        #slide(title: theme.title, subtitle: t)[
          #v(1em)
          #grid(
            columns: (1fr, 1fr),
            gutter: 2em,
            ..block.groups.map(group => [
              #box(fill: if group.type == "positive" { rgb("F8FAFC") } else { rgb("FEF2F2") }, inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
                #text(size: 18pt, weight: "bold", fill: if group.type == "positive" { rgb("0F172A") } else { rgb("991B1B") })[#group.title]
                #v(1em)
                #for item in group.items [
                  #text(size: 14pt)[・ #item]
                  #v(0.5em)
                ]
              ])
            ])
          )
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockText
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockText" [
      #if "paragraphs" in block and block.paragraphs != none [
        #let chunked = chunks(block.paragraphs, 2)
        #for (i, c) in chunked.enumerate() [
          #let t = if "title" in block { block.title } else { "テキスト" }
          #let sub = t
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #for p in c [
              #text(size: 16pt, fill: rgb("1E293B"))[#p]
              #v(1.5em)
            ]
          ]
        ]
      ]
    ]
  ]
]