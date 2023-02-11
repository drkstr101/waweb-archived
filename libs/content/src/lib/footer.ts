import { defineNestedType, FieldDefs } from 'contentlayer/source-files';
import Action from './action';
import Image from './image';

export const name = 'Footer';

export const description = 'Global footer config';

export const fields: FieldDefs = {
  type: {
    type: 'string',
    default: name,
    required: true,
  },
  variant: {
    type: 'enum',
    description: 'variant',
    options: ['variant-a', 'variant-b'],
    default: 'variant-a',
  },
  text: {
    type: 'markdown',
    description: 'Brand text',
  },
  copyrightText: {
    type: 'markdown',
    description: 'Copyright text',
    default:
      '© 2023 [Watheia Labs, LLC.](https://www.watheia.com/). All rights reserved.',
  },
  logo: {
    type: 'nested',
    of: Image,
  },
  socialLinks: {
    type: 'list',
    of: Action,
  },
  solutionLinks: {
    type: 'list',
    of: Action,
  },
  supportLinks: {
    type: 'list',
    of: Action,
  },
  companyLinks: {
    type: 'list',
    of: Action,
  },
  legalLinks: {
    type: 'list',
    of: Action,
  },
  primaryLinks: {
    type: 'list',
    of: Action,
  },

  styles: {
    type: 'json',
    default: {
      self: {},
    },
  },
};

export default defineNestedType(() => ({
  name,
  description,
  fields,
}));
