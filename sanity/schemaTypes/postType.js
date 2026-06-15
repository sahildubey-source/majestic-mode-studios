import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag / Category',
      type: 'string',
      options: {
        list: [
          {title: 'Paid Media', value: 'Paid Media'},
          {title: 'Social Media', value: 'Social Media'},
          {title: 'AI & Creative', value: 'AI & Creative'},
          {title: 'Strategy', value: 'Strategy'},
          {title: 'SEO', value: 'SEO'},
          {title: 'CRO', value: 'CRO'},
          {title: 'Automation', value: 'Automation'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g. "7 min read"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Tag Color',
      type: 'string',
      description: 'CSS color for the tag badge. Use a hex value like #7B5CF0 or #FF8A65',
      options: {
        list: [
          {title: 'Purple (primary)', value: 'var(--accent-primary)'},
          {title: 'Peach (secondary)', value: 'var(--accent-peach)'},
          {title: 'Gold (SEO)', value: '#FFB800'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on the blog listing page.',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tag: 'tag',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {tag, publishedAt} = selection
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'}) : 'No date'
      return {...selection, subtitle: `${tag || 'Uncategorised'} · ${date}`}
    },
  },
})
