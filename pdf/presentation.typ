#set page(
  paper: "presentation-16-9",
  margin: 0pt,
  background: rect(width: 100%, height: 100%, fill: rgb("0F172A")) // Tailwind slate-900
)

#set text(
  font: ("Noto Sans CJK JP", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "sans-serif"),
  size: 20pt,
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

// Helper: String truncate function
#let truncate(s, max-len: 80) = {
  if s == none { return "" }
  return s
}

// ----------------------------------------------------------------------------
// 表紙 (Title Slide)
// ----------------------------------------------------------------------------
#box(width: 100%, height: 100%, inset: 4em, [
  #v(1fr)
  #text(size: 32pt, weight: "bold", fill: rgb("F97316"))[つなげモン シリーズ]
  
  #v(1em)
  #par(leading: 1.2em)[
    #text(size: 56pt, weight: "bold")[
      社内外の分断をなくし、\
      データの自動化を実現する。
    ]
  ]
  
  #v(2em)
  #text(size: 24pt, fill: rgb("94A3B8"))[
    あらゆるシステムと現場をシームレスにつなぐ\
    ゲートウェイ・プラットフォーム
  ]
  #v(2fr)
  
  #align(right)[
    #text(size: 16pt, fill: rgb("475569"))[提案書 (Confidential) / K-SP Co.,Ltd.]
  ]
])

#pagebreak()

// ----------------------------------------------------------------------------
// スライドレイアウト関数
// ----------------------------------------------------------------------------
#let slide(title: "", subtitle: "", body) = {
  set page(
    background: rect(width: 100%, height: 100%, fill: rgb("FFFFFF")),
    margin: (top: 4.5em, bottom: 2.5em, left: 3.5em, right: 3.5em)
  )
  set text(fill: rgb("1E293B")) // slate-800
  
  // Header
  place(top + left, dy: -3em, [
    #text(size: 28pt, weight: "bold", fill: rgb("1E293B"))[#truncate(title, max-len: 40)]
    #if subtitle != "" [
      #h(1em)
      #text(size: 18pt, weight: "bold", fill: rgb("F97316"))[#truncate(subtitle, max-len: 40)]
    ]
    #v(0.5em)
    #line(length: 100%, stroke: 2pt + rgb("F97316"))
  ])
  
  box(width: 100%, height: 100%, [
    #set text(size: 18pt)
    #set par(leading: 1.4em)
    #body
  ])
  
  // Footer
  place(bottom + right, dy: 1em, [
    #text(size: 12pt, fill: rgb("94A3B8"))[つなげモン 営業DX化プラットフォーム]
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
  #par(leading: 1.5em)[
    #text(size: 22pt, weight: "bold")[#truncate(clean-desc, max-len: 120)]
  ]
  
  #v(2em)
  
  #grid(
    columns: (1fr, 1fr),
    gutter: 2em,
    [
      #box(fill: rgb("FFF7ED"), inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
        #text(weight: "bold", fill: rgb("C2410C"))[■ よくある課題]
        #v(1em)
        #if "problems" in theme and theme.problems != none [
          #for p in theme.problems [
            - #truncate(p, max-len: 60)
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
        - システムと現場をシームレスに連携
        - データの二重入力をなくし、自動化を実現
        - リアルタイムな情報共有で意思決定を加速
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
              #text(size: 16pt, fill: rgb("475569"))[#truncate(block.desc, max-len: 100)]
              #v(1em)
            ]
            #grid(
              columns: (1fr, 1fr, 1fr),
              gutter: 1.5em,
              ..c.map(point => [
                #box(fill: rgb("F8FAFC"), inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
                  #if "badge" in point [
                    #text(size: 36pt, weight: "bold", fill: rgb("E2E8F0"))[#point.badge]
                    #v(-1.5em)
                  ]
                  #text(size: 18pt, weight: "bold", fill: rgb("1E293B"))[#truncate(point.title, max-len: 40)]
                  #if "subtitle" in point and point.subtitle != "" [
                    #v(0.5em)
                    #text(size: 14pt, weight: "bold", fill: rgb("C2410C"))[#truncate(point.subtitle, max-len: 40)]
                  ]
                  #if "desc" in point [
                    #v(1em)
                    #text(size: 14pt)[#truncate(point.desc, max-len: 120)]
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
        #let chunked = chunks(block.items, 2)
        #for (i, c) in chunked.enumerate() [
          #let sub = block.title
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #for scenario in c [
              #box(fill: rgb("FFF7ED"), inset: 0.5em, radius: 0.5em)[
                #text(size: 14pt, weight: "bold", fill: rgb("C2410C"))[#truncate(scenario.tag, max-len: 30)]
              ]
              #v(0.5em)
              #grid(
                columns: (1fr, auto, 1fr),
                align: horizon,
                gutter: 1.5em,
                [
                  #text(size: 16pt, fill: rgb("64748B"))[導入前]
                  #v(0.5em)
                  #text(size: 18pt, weight: "bold")[#truncate(scenario.before, max-len: 60)]
                ],
                [
                  #text(size: 28pt, fill: rgb("94A3B8"))[→]
                ],
                [
                  #text(size: 16pt, fill: rgb("64748B"))[導入後]
                  #v(0.5em)
                  #text(size: 18pt, weight: "bold", fill: rgb("10B981"))[#truncate(scenario.after, max-len: 60)]
                ]
              )
              #v(1em)
              #box(fill: rgb("F1F5F9"), inset: 1em, radius: 0.5em, width: 100%)[
                #text(size: 14pt)[#truncate(scenario.desc, max-len: 120)]
              ]
              #v(1.5em)
            ]
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockChatDemo
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockChatDemo" [
      #if "patterns" in block and block.patterns != none [
        #let chunked = chunks(block.patterns, 2)
        #for (i, c) in chunked.enumerate() [
          #let sub = block.title
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #grid(
              columns: (1fr, 1fr),
              gutter: 1.5em,
              ..c.map(pattern => [
                #box(fill: rgb("F8FAFC"), inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
                  #text(size: 16pt, weight: "bold", fill: rgb("1E293B"))[#truncate(pattern.label, max-len: 20): #truncate(pattern.title, max-len: 30)]
                  #v(1em)
                  // メッセージは長すぎると溢れるため最大3件までに制限
                  #for msg in pattern.messages.slice(0, calc.min(3, pattern.messages.len())) [
                    #if msg.senderType == "user" [
                      #box(fill: rgb("E2E8F0"), inset: 0.8em, radius: 0.5em, width: 100%)[
                        #text(size: 12pt, weight: "bold")[#truncate(msg.senderName, max-len: 20)]
                        #v(0.5em)
                        #text(size: 14pt)[#if "prefix" in msg { [#text(fill: rgb("64748B"))[#msg.prefix] ] } #truncate(msg.text, max-len: 60)]
                      ]
                    ] else [
                      #box(fill: rgb("FFF7ED"), stroke: 1pt + rgb("F97316"), inset: 0.8em, radius: 0.5em, width: 100%)[
                        #text(size: 12pt, weight: "bold", fill: rgb("C2410C"))[#truncate(msg.senderName, max-len: 20)]
                        #v(0.5em)
                        #text(size: 14pt)[#truncate(msg.text, max-len: 80)]
                      ]
                    ]
                    #v(0.5em)
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
        #let chunked = chunks(block.items, 3)
        #for (i, c) in chunked.enumerate() [
          #let sub = block.title
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #grid(
              columns: (1fr, 1fr, 1fr),
              gutter: 1.5em,
              ..c.map(item => [
                #box(stroke: 1pt + rgb("E2E8F0"), inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
                  #text(weight: "bold", size: 16pt, fill: rgb("C2410C"))[#item.num]
                  #v(0.5em)
                  #text(weight: "bold", size: 16pt)[#truncate(item.title, max-len: 30)]
                  #v(0.5em)
                  #text(size: 12pt)[#truncate(item.desc, max-len: 120)]
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
        #let chunked = chunks(block.items, 3)
        #for (i, c) in chunked.enumerate() [
          #let sub = block.title
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #grid(
              columns: (1fr),
              gutter: 1.5em,
              ..c.map(item => [
                #box(width: 100%, stroke: (bottom: 1pt + rgb("E2E8F0")), inset: (bottom: 1em))[
                  #text(weight: "bold", size: 18pt, fill: rgb("1E293B"))[Q. #truncate(item.q, max-len: 60)]
                  #v(0.5em)
                  #text(size: 16pt, fill: rgb("475569"))[A. #truncate(item.a, max-len: 120)]
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
        #let chunked = chunks(block.items, 4)
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
                #box(fill: rgb("F8FAFC"), inset: 1em, radius: 0.5em, width: 100%, [
                  #text(size: 16pt, weight: "bold", fill: rgb("1E293B"))[#truncate(item.title, max-len: 60)]
                  #v(0.5em)
                  #if "desc" in item and item.desc != none [
                    #text(size: 14pt)[#truncate(item.desc, max-len: 120)]
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
          // Tableは列数が不定のため、そのまま出力。ただしはみ出し防止でフォントを小さくする
          #set text(size: 12pt)
          #let cols = block.headers.len()
          #table(
            columns: array.range(0, cols).map(x => 1fr),
            align: center + horizon,
            stroke: 0.5pt + rgb("E2E8F0"),
            ..block.headers.map(h => [#text(weight:"bold", fill: rgb("475569"))[#truncate(h, max-len: 20)]]),
            ..block.rows.map(row => {
              let cells = ()
              cells.push([#text(weight:"bold")[#truncate(row.label, max-len: 20)]])
              for v in row.values {
                cells.push([#text()[#truncate(v, max-len: 20)]])
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
        #let chunked = chunks(block.items, 4)
        #for (i, c) in chunked.enumerate() [
          #let t = if "title" in block { block.title } else { "リスト" }
          #let sub = t
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #grid(
              columns: (1fr),
              gutter: 1em,
              ..c.map(item => [
                #box(width: 100%, stroke: (bottom: 1pt + rgb("E2E8F0")), inset: (bottom: 0.5em))[
                  #text(weight: "bold", size: 16pt, fill: rgb("1E293B"))[#truncate(item.title, max-len: 60)]
                  #v(0.5em)
                  #if "desc" in item and item.desc != none [
                    #text(size: 14pt, fill: rgb("475569"))[#truncate(item.desc, max-len: 120)]
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
        #v(2em)
        #align(center)[
          #text(size: 28pt, weight: "bold")[#if "title" in block { truncate(block.title, max-len: 40) } else { "" }]
          #v(1em)
          #if "desc" in block and block.desc != none [
            #text(size: 18pt, fill: rgb("475569"))[#truncate(block.desc, max-len: 120)]
          ]
        ]
      ]
      
    // ----------------------------------------------------------------------------
    // BlockComparisonCards
    // ----------------------------------------------------------------------------
    ] else if block.type == "BlockComparisonCards" [
      #if "groups" in block and block.groups != none [
        // 比較カードは通常2つなのでそのまま出力
        #let t = if "title" in block { block.title } else { "相性" }
        #slide(title: theme.title, subtitle: t)[
          #v(1em)
          #grid(
            columns: (1fr, 1fr),
            gutter: 2em,
            ..block.groups.map(group => [
              #box(fill: if group.type == "positive" { rgb("F8FAFC") } else { rgb("FEF2F2") }, inset: 1.5em, radius: 1em, width: 100%, height: 100%, [
                #text(size: 20pt, weight: "bold", fill: if group.type == "positive" { rgb("0F172A") } else { rgb("991B1B") })[#truncate(group.title, max-len: 40)]
                #v(1em)
                // アイテム数は最大5個までに制限
                #for item in group.items.slice(0, calc.min(5, group.items.len())) [
                  #text(size: 14pt)[・ #truncate(item, max-len: 60)]
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
        #let chunked = chunks(block.paragraphs, 3) // 3段落ずつ分割
        #for (i, c) in chunked.enumerate() [
          #let t = if "title" in block { block.title } else { "テキスト" }
          #let sub = t
          #if chunked.len() > 1 { sub = sub + " (" + str(i + 1) + "/" + str(chunked.len()) + ")" }
          
          #slide(title: theme.title, subtitle: sub)[
            #v(1em)
            #for p in c [
              #text(size: 16pt, fill: rgb("1E293B"))[#truncate(p, max-len: 200)]
              #v(1em)
            ]
          ]
        ]
      ]
    ]
  ]
]