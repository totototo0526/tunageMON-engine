#let theme = (title: "Hello", skip_default_slides: true)
#if theme.at("skip_default_slides", default: false) == false [
  Default slide
] else [
  Skipped slide
]
