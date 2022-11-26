import clsx from 'clsx';

import { HeadingProps, Heading } from '../../base-ui.elements/heading';
import { PossibleSizes } from '../../base-ui.theme/sizes';

import sizeStyles from './heading-sizes.module.scss';
import marginStyles from './heading-margins.module.scss';
import styles from './heading.module.scss';

export type HeaderProps = {
  /** font-size for the header */
  size?: PossibleSizes;
} & HeadingProps;

export function H1(props: HeaderProps) {
  return (
    <Heading
      data-bit-id="waweb.elements/heading"
      element="h1"
      {...props}
      className={clsx(
        styles['h1'],
        marginStyles['h1'],
        sizeStyles[props.size || 'xl'],
        props.className
      )}
    />
  );
}
export function H2(props: HeaderProps) {
  return (
    <Heading
      data-bit-id="waweb.elements/heading"
      element="h2"
      {...props}
      className={clsx(
        styles['h2'],
        marginStyles['h2'],
        sizeStyles[props.size || 'lg'],
        props.className
      )}
    />
  );
}
export function H3(props: HeaderProps) {
  return (
    <Heading
      data-bit-id="waweb.elements/heading"
      element="h3"
      {...props}
      className={clsx(
        styles['h3'],
        marginStyles['h3'],
        sizeStyles[props.size || 'md'],
        props.className
      )}
    />
  );
}
export function H4(props: HeaderProps) {
  return (
    <Heading
      data-bit-id="waweb.elements/heading"
      element="h4"
      {...props}
      className={clsx(
        styles['h4'],
        marginStyles['h4'],
        sizeStyles[props.size || 'sm'],
        props.className
      )}
    />
  );
}
export function H5(props: HeaderProps) {
  return (
    <Heading
      data-bit-id="waweb.elements/heading"
      element="h5"
      {...props}
      className={clsx(
        styles['h5'],
        marginStyles['h5'],
        sizeStyles[props.size || 'xs'],
        props.className
      )}
    />
  );
}
export function H6(props: HeaderProps) {
  return (
    <Heading
      data-bit-id="waweb.elements/heading"
      element="h6"
      {...props}
      className={clsx(
        styles['h6'],
        marginStyles['h6'],
        sizeStyles[props.size || 'xxs'],
        props.className
      )}
    />
  );
}
