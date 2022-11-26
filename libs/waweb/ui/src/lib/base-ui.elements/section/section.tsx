import React from 'react';
import classNames from 'clsx';
import styles from './section.module.scss';

export type SectionProps = {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 *
 * A wrapper component that separates the page into semantic sections.
 */
export function Section({ className, children, ...rest }: SectionProps) {
  return (
    <div className={classNames(styles['spacer'], styles['sectionMargin'], className)} {...rest}>
      {children}
    </div>
  );
}
