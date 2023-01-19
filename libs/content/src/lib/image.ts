import { defineNestedType, FieldDefs } from 'contentlayer/source-files';

export const name = 'Image';

export const description = 'Image media';

export const fields: FieldDefs = {
  type: {
    type: 'string',
    default: name,
    required: true,
  },
  src: {
    type: 'string',
    description: 'Image source',
    required: true,
  },
  alt: {
    type: 'string',
    description: 'Alt text',
  },
  width: {
    type: 'number',
    description: 'Image source width',
  },
  height: {
    type: 'number',
    description: 'Image source height',
  },
  elementId: {
    type: 'string',
    description: 'Dom element id',
  },
};

export default defineNestedType(() => ({
  name,
  description,
  fields,
}));
