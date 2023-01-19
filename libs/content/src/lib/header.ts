import { defineNestedType, FieldDefs } from 'contentlayer/source-files';
import Action from './action';
import Image from './image';

export const name = 'Header';

export const description = 'Site header config';

export const fields: FieldDefs = {
  type: {
    type: 'string',
    default: name,
    required: true,
  },
  variant: {
    type: 'enum',
    description: 'variant',
    options: ['variant-a', 'variant-b', 'variant-c'],
    default: 'variant-b',
  },
  isSticky: {
    type: 'boolean',
    description: 'Make header stick to the top of the page',
    default: false,
  },
  title: {
    type: 'string',
    description: 'Main brand text',
  },
  isTitleVisible: {
    type: 'boolean',
    description: 'Display the main title',
    default: false,
  },
  logo: {
    type: 'nested',
    of: Image,
  },
  primaryLinks: {
    type: 'list',
    of: Action,
  },
  secondaryLinks: {
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
