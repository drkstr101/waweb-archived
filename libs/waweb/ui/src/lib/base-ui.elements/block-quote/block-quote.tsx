import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';
import styles from './block-quote.module.scss';

export type BlockQuoteProps = HTMLAttributes<HTMLQuoteElement>;

export function BlockQuote({ className, children, ...rest }: BlockQuoteProps) {
  return (
    <blockquote {...rest} className={classNames(styles['blockQuote'], className)}>
      {children}
    </blockquote>
  );
}
