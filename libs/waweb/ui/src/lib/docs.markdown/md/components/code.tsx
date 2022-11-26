import { useMemo } from 'react';
import { HtmlHTMLAttributes } from 'react';
import { InlineCode, InlineCodeProps } from '../../../base-ui.elements/inline-code';
import { CodeSnippet, CodeSnippetProps } from '../../../docs.ui/code-snippet';

type MdProps = { node?: any; inline?: boolean } & HtmlHTMLAttributes<HTMLPreElement>;
export type SnippetProps = MdProps &
  (Omit<InlineCodeProps, 'children'> | Omit<CodeSnippetProps, 'children'>);

const languageRegex = /language-(\w+)/;

/** Markdown-react code snippet */
export function Code({ inline, children, node, className = 'code', ...rest }: SnippetProps) {
  const stringifiedChildren = useMemo(
    () => children?.toString().replace(/\n$/, '') || '',
    [children]
  );
  const language = useMemo(() => languageRegex.exec(className)?.[1], [className]);

  if (inline) {
    return <InlineCode {...rest} children={stringifiedChildren} />;
  } else {
    return <CodeSnippet {...rest} children={stringifiedChildren} language={language} />;
  }
}
