import { defineNestedType, FieldDefs } from 'contentlayer/source-files';

export const name = 'MetaTag';

export const description = 'SEO metadata';

export const fields: FieldDefs = {
  type: {
    type: 'string',
    default: name,
    required: true,
  },
  property: {
    type: 'enum',
    description: 'Property',
    options: [
      'og:title',
      'og:type',
      'og:image',
      'og:image:alt',
      'og:url',
      'og:description',
      'og:locale',
      'og:site_name',
      'og:video',
      'twitter:card',
      'twitter:site',
      'twitter:creator',
      'twitter:description',
      'twitter:title',
      'twitter:image',
      'twitter:image:alt',
      'twitter:player',
    ],
  },
  content: {
    type: 'string',
    description: 'Field content',
    required: true,
    default: '',
  },
};

export default defineNestedType(() => ({
  name,
  description,
  fields,
}));
