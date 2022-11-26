import React from 'react';
import classNames from 'clsx';
import styles from './image.module.scss';

export type ImageProps = Record<string, any> & React.ImgHTMLAttributes<HTMLImageElement>;

export function Image({ src, className, alt, ...rest }: ImageProps) {
  return (
    <img {...rest} alt={alt ?? ''} src={src} className={classNames(styles['img'], className)} />
  );
}
