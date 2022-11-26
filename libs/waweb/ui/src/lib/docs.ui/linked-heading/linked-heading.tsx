import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';
import { H1, H2, H3, H4, H5, H6 } from '../heading';
import type { Sizes, Element } from '../heading';
import { Anchor } from '../../base-ui.elements/anchor';
import styles from './linked-heading.module.scss';

export type { Sizes, Element };
export type LinkedHeadingProps = {
  /**
   * anchor link to section
   */
  link?: string;

  /**
   * font size override for title string [optional]
   */
  size?: Sizes;

  /**
   * heading html element ("h1", "h2", etc)
   */
  element?: Element;
} & HTMLAttributes<HTMLDivElement>;

/**
 * section heading with anchor link
 */
export function LinkedHeading({
  children,
  link,
  size,
  element = 'h3',
  className,
  ...rest
}: LinkedHeadingProps) {
  const Element = headerElement(element);
  return (
    <div className={classNames(styles['linkedHeading'], className)} {...rest}>
      <Element className={styles['heading']} size={size} id={link}>
        {children}
      </Element>
      {link && <Anchor className={styles['anchor']} href={link}></Anchor>}
    </div>
  );
}

const headerElement = (element?: Element) => {
  switch (element) {
    case 'h1':
      return H1;
    case 'h2':
      return H2;
    case 'h3':
      return H3;
    case 'h4':
      return H4;
    case 'h5':
      return H5;
    case 'h6':
      return H6;
    default:
      return H3;
  }
};
