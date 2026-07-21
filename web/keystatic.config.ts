import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    themes: collection({
      label: 'Themes / LPs',
      slugField: 'id',
      path: 'src/content/themes/*',
      format: { data: 'yaml' },
      schema: {
        id: fields.slug({ name: { label: 'ID (e.g. 07-theme)' } }),
        layout: fields.text({ label: 'Layout (e.g. template_a)', defaultValue: 'template_a' }),
        title: fields.text({ label: 'Title' }),
        subtitle: fields.text({ label: 'Subtitle' }),
        description: fields.text({ label: 'Description', multiline: true }),
        hero_services: fields.array(fields.text({ label: 'Service Point' }), { label: 'Hero Services', itemLabel: props => props.value }),
        pricing: fields.object({
          free_trial: fields.text({ label: 'Free Trial Text' }),
          initial: fields.text({ label: 'Initial Cost' }),
          monthly: fields.text({ label: 'Monthly Cost' }),
        }, { label: 'Pricing' }),
        button: fields.object({
          type: fields.text({ label: 'Button Type' }),
          url: fields.text({ label: 'Button URL' }),
          text: fields.text({ label: 'Button Text' }),
          icon: fields.text({ label: 'Button Icon' }),
        }, { label: 'Main CTA Button' }),
        problems: fields.array(
          fields.object({
            title: fields.text({ label: 'Problem Title' }),
            description: fields.text({ label: 'Problem Description', multiline: true }),
            image: fields.text({ label: 'Image URL' }),
          }),
          { label: 'Problems to Solve', itemLabel: props => props.fields.title.value }
        ),
        blocks: fields.blocks(
          {
            BlockCards: {
              label: 'Cards Block',
              schema: {
                title: fields.text({ label: 'Title' }),
                subtitle: fields.text({ label: 'Subtitle' }),
                desc: fields.text({ label: 'Description' }),
                items: fields.array(fields.object({
                  badge: fields.text({ label: 'Badge' }),
                  title: fields.text({ label: 'Card Title' }),
                  subtitle: fields.text({ label: 'Card Subtitle' }),
                  desc: fields.text({ label: 'Card Description', multiline: true }),
                }), { label: 'Cards', itemLabel: props => props.fields.title.value })
              }
            },
            BlockBeforeAfter: {
              label: 'Before/After Block',
              schema: {
                title: fields.text({ label: 'Title' }),
                subtitle: fields.text({ label: 'Subtitle' }),
                desc: fields.text({ label: 'Description' }),
                items: fields.array(fields.object({
                  tag: fields.text({ label: 'Tag (e.g. Company Name)' }),
                  before: fields.text({ label: 'Before' }),
                  after: fields.text({ label: 'After' }),
                  desc: fields.text({ label: 'Description', multiline: true }),
                  image: fields.text({ label: 'Image URL' })
                }), { label: 'Items', itemLabel: props => props.fields.tag.value })
              }
            },
            BlockFAQ: {
              label: 'FAQ Block',
              schema: {
                title: fields.text({ label: 'Title' }),
                subtitle: fields.text({ label: 'Subtitle' }),
                items: fields.array(fields.object({
                  q: fields.text({ label: 'Question' }),
                  a: fields.text({ label: 'Answer', multiline: true })
                }), { label: 'Q&A Items', itemLabel: props => props.fields.q.value })
              }
            },
            BlockSteps: {
              label: 'Steps Block',
              schema: {
                title: fields.text({ label: 'Title' }),
                subtitle: fields.text({ label: 'Subtitle' }),
                items: fields.array(fields.object({
                  title: fields.text({ label: 'Step Title' }),
                  desc: fields.text({ label: 'Step Description', multiline: true })
                }), { label: 'Steps', itemLabel: props => props.fields.title.value })
              }
            },
            BlockCTA: {
              label: 'CTA Block',
              schema: {
                title: fields.text({ label: 'Title' }),
                desc: fields.text({ label: 'Description', multiline: true }),
                theme: fields.text({ label: 'Theme (dark or light)' }),
                align: fields.text({ label: 'Alignment (left or center)' }),
                button: fields.object({
                  text: fields.text({ label: 'Button Text' }),
                  url: fields.text({ label: 'Button URL' })
                })
              }
            },
            BlockText: {
              label: 'Text Block',
              schema: {
                title: fields.text({ label: 'Title' }),
                subtitle: fields.text({ label: 'Subtitle' }),
                theme: fields.text({ label: 'Theme (dark or light)' }),
                paragraphs: fields.array(fields.text({ label: 'Paragraph', multiline: true }), { label: 'Paragraphs' }),
                cardsTitle: fields.text({ label: 'Cards Title' }),
                cards: fields.array(fields.object({
                  num: fields.text({ label: 'Number/Badge' }),
                  title: fields.text({ label: 'Title' }),
                  desc: fields.text({ label: 'Description', multiline: true })
                }), { label: 'Bottom Cards', itemLabel: props => props.fields.title.value })
              }
            }
          },
          { label: 'Layout Blocks' }
        )
      }
    })
  }
});
