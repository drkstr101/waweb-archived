import { AnchorHTMLAttributes } from 'react';
import classNames from 'clsx';
import styles from './external-link.module.scss';

export type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function ExternalLink({ href, children, className, ...rest }: ExternalLinkProps) {
  return (
    <a
      {...rest}
      target="_blank"
      rel="noreferrer"
      href={href}
      className={classNames(styles['link'], className)}
    >
      {children}
    </a>
  );
}
