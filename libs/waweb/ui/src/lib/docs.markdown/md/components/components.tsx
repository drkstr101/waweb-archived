import { HtmlHTMLAttributes } from 'react';

import { BlockQuote } from '../../../base-ui.elements/block-quote';
import { Bold } from '../../../base-ui.elements/bold';
import { ExternalLink } from '../../../docs.routing/external-link';
import { Image } from '../../../docs.ui/image';
import { Italic } from '../../../base-ui.elements/italic';
import { Ol } from '../../../base-ui.elements/ol';
import { Paragraph } from '../../../docs.ui/paragraph';
import { Separator } from '../../../docs.ui/separator';
import { Sup } from '../../../base-ui.elements/sup';
import { Table } from '../../../base-ui.elements/table/base-table';
import { Td } from '../../../base-ui.elements/table/td';
import { Tr } from '../../../base-ui.elements/table/tr';
import { Ul } from '../../../base-ui.elements/ul';

import { h1, h2, h3, h4, h5, h6 } from '../../heading';
import { Code } from './code';
import { Components } from '../../../types';

// inline functions removes unwanted props, that should not become html attributes

export const components: Components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,

  a: ExternalLink,
  blockquote: BlockQuote,
  code: Code,
  em: Italic,
  hr: Separator,
  img: Image,
  p: Paragraph,
  // code includes it's own pre tag
  pre: (props: HtmlHTMLAttributes<HTMLPreElement>) => <pre {...props} />,
  strong: Bold,
  sup: Sup,
  table: Table,
  thematicBreak: Separator,
  td: ({ isHeader, ...rest }: any) => <Td {...rest} />,
  tr: Tr,
  // th: ({ isHeader, ...rest }: any) => <Th {...rest} />,
  // li: ({ ordered, depth, checked, ...rest}: any) => <li {...rest}/>,
  ol: ({ ordered, depth, ...rest }: any) => <Ol {...rest} />,
  ul: ({ ordered, depth, ...rest }: any) => <Ul {...rest} />
};
