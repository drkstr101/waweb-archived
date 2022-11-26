import { HTMLAttributes } from 'react';
import classNames from 'clsx';
import styles from './sup.module.scss';

export type SupProps = HTMLAttributes<HTMLSpanElement>;

export function Sup({ children, className, ...rest }: SupProps) {
  return (
    <sup {...rest} className={classNames(styles['sup'], className)}>
      {children}
    </sup>
  );
}
