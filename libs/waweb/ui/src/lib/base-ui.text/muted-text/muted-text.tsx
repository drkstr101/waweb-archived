import React from 'react';
import classNames from 'clsx';
import styles from './muted-text.module.scss';

/**
 * Text with muted (gray) color. Behaves like a regular *span* element.<br/>
 * Applies text color with css variable `--wa-text-color-light`
 * @name MutedText
 */
export function MutedText(props: React.HTMLAttributes<HTMLSpanElement>) {
  return <span {...props} className={classNames(styles['mutedText'], props.className)} />;
}

/**
 * Pure css class name, colors text as muted (gray).<br/>
 * Use this directly as a class name without creating a DOM element<br/>
 *
 * Colors derives from css variable `--wa-text-color-light`
 * @name mutedText
 */
export const mutedText = styles['mutedText'];
