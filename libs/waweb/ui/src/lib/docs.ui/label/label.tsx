import React from 'react';
import clsx from 'clsx';
import styles from './label.module.scss';

type LabelProps = {
  onPick?: (label: string) => any;
  children: string;
} & React.InputHTMLAttributes<HTMLDivElement>;

export function Label({ onPick, onClick, className, ...rest }: LabelProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onPick && onPick(rest.children);
    return onClick && onClick(e);
  };

  return <div {...rest} onClick={handleClick} className={clsx(className, styles.label)} />;
}
