import {
  ComputedFields,
  defineDocumentType,
  DocumentContentType,
  FieldDefs,
  LocalDocument,
} from 'contentlayer/source-files';

export const name = 'Page';

export const description = 'Generic page entry point';

export const contentType: DocumentContentType = 'markdown';

export const isSingleton = false;

export const filePathPattern = `pages/**/*.md`;

export const fields: FieldDefs = {
  title: {
    type: 'string',
    description: 'The title of the page',
    required: true,
  },
  layout: {
    type: 'string',
    description: 'The layout of the page',
    required: true,
  },
};

export const computedFields: ComputedFields<'Page'> = {
  slug: {
    type: 'string',
    resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
  },
};

export default defineDocumentType(() => ({
  name,
  contentType,
  filePathPattern,
  fields,
  computedFields,
}));
