import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './base-table.module.scss';

export type TableProps = HTMLAttributes<HTMLTableElement>;

export function Table({ children, className, ...rest }: TableProps) {
  return (
    <table {...rest} className={clsx(styles['table'], className)}>
      {children}
    </table>
  );
}
