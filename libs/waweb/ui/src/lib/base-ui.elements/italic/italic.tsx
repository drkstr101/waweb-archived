import { HTMLAttributes } from 'react';
import classNames from 'clsx';
import styles from './italic.module.scss';

export type ItalicProps = HTMLAttributes<HTMLSpanElement>;

export function Italic({ children, className, ...rest }: ItalicProps) {
  return (
    <em {...rest} className={classNames(styles['italic'], className)}>
      {children}
    </em>
  );
}
