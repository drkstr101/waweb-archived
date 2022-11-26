import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './separator.module.scss';

export type SeparatorProps = {
  /**
   * set as vertical / horizontal separator
   */
  layout?: 'vertical' | 'horizontal';
} & HTMLAttributes<HTMLDivElement>;

/**
 * Separating line.
 *
 * Use these implicit CSS variables to style:
 * -   `--wa-border-color-lightest`
 * @name Separator
 * @example
 * <Separator />
 */
export function Separator({ layout = 'horizontal', className, ...rest }: SeparatorProps) {
  return (
    <div
      data-bit-id="base-ui.elements/separator"
      className={clsx(styles['separator'], styles[layout], className)}
      {...rest}
    />
  );
}
