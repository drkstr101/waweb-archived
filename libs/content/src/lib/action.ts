import { defineNestedType, FieldDefs } from 'contentlayer/source-files';

export const name = 'Action';

export const description = 'A button or link action';

export const fields: FieldDefs = {
  type: {
    type: 'string',
    default: name,
    required: true,
  },
  url: {
    type: 'string',
    description: 'Link target',
    default: '#',
    required: true,
  },
  label: {
    type: 'string',
    description: 'Link text',
  },
  altText: {
    type: 'string',
    description: 'Alt text',
  },
  icon: {
    type: 'enum',
    options: [
      'facebook',
      'github',
      'instagram',
      'linkedin',
      'reddit',
      'twitter',
      'youtube',
      'arrow-left',
      'arrow-right',
      'arrow-left-circle',
      'arrow-right-circle',
      'cart',
      'chevron-left',
      'chevron-right',
      'google-play',
      'mail',
      'play',
      'play-circle',
      'send',
    ],
  },
  showIcon: {
    type: 'boolean',
    default: false,
    required: false,
  },
  iconPosition: {
    type: 'enum',
    options: ['left', 'right'],
  },
  variant: {
    type: 'enum',
    description: 'variant',
    options: ['link', 'primary', 'secondary', 'accent', 'clear'],
    default: 'link',
  },
  elementId: {
    type: 'string',
    description: 'Optional dom target',
  },
};

export default defineNestedType(() => ({
  name,
  description,
  fields,
}));
