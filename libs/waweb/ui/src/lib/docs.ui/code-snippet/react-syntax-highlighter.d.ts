declare module 'react-syntax-highlighter/dist/esm/prism-light';
declare module 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
declare module 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';

declare module 'react-syntax-highlighter' {
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    customStyle?: any;
    lineProps?: lineTagPropsFunction | React.HTMLProps<HTMLElement>;
    codeTagProps?: React.HTMLProps<HTMLElement>;
    useInlineStyles?: boolean;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    lineNumberStyle?: any;
    [spread: string]: any;
  }
}
