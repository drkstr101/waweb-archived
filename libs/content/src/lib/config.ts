import {
  defineDocumentType,
  DocumentContentType,
  FieldDefs,
} from 'contentlayer/source-files';
import Footer from './footer';
import Header from './header';
import MetaTag from './meta-tag';

export const name = 'Config';

export const description = 'Site configuration';

export const contentType: DocumentContentType = 'data';

export const isSingleton = true;

export const filePathPattern = `data/config.json`;

export const fields: FieldDefs = {
  type: {
    type: 'string',
    default: name,
    required: true,
  },
  favicon: {
    type: 'string',
    description: 'Favicon image url',
    default: '/images/icon.png',
  },
  titleSuffix: {
    type: 'string',
    description:
      'Suffix to append to the title tag of all pages, except in pages where the this behavior is disabled (e.g. typically the home page should have the site name as a prefix)',
  },
  defaultSocialImage: {
    type: 'string',
    description:
      'Default image to use for the og:image meta tag in all pages, except in pages that define another image.',
  },
  defaultMetaTags: {
    type: 'list',
    of: MetaTag,
  },
  header: {
    type: 'nested',
    of: Header,
  },
  footer: {
    type: 'nested',
    of: Footer,
  },
};

export default defineDocumentType(() => ({
  name,
  description,
  contentType,
  isSingleton,
  filePathPattern,
  fields,
}));
