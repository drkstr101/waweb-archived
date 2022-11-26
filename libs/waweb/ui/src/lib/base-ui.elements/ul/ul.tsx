import { HTMLAttributes } from 'react';
import classNames from 'clsx';
import styles from './ul.module.scss';

export type UlProps = HTMLAttributes<HTMLUListElement>;

export function Ul({ children, className, ...rest }: UlProps) {
  return (
    <ul {...rest} className={classNames(styles['ul'], className)}>
      {children}
    </ul>
  );
}
