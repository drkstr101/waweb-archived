import classNames from 'clsx';
import { HTMLAttributes } from 'react';
import styles from './tr.module.scss';

export type TrProps = HTMLAttributes<HTMLTableRowElement>;

export function Tr({ children, className, ...rest }: TrProps) {
  return (
    <tr {...rest} className={classNames(styles['tr'], className)}>
      {children}
    </tr>
  );
}
