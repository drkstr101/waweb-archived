import { AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';

export type LinkProps = {
  /**
   * opens link in a new tab
   */
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Anchor({
  href,
  children,
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...rest} className={className} target="_blank" rel="noreferrer" href={href}>
      {children}
    </a>
  );
}

/**
 * Base component for link, equivalent to a `<a/>` tag.
 *
 * This component is a placeholder for future implementations,
 * where different applications can override this component with their underlying navigation system.
 */
export function Link({ external, children, href, ...rest }: LinkProps) {
  const isExternal =
    external ||
    (typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0));

  const externalProps = isExternal ? { rel: 'noopener', target: '_blank' } : {};

  const Anchor = () => (
    <a data-bit-id="base-ui.elements/link" {...externalProps} {...rest}>
      {children}
    </a>
  );

  return (
    <NextLink href={href ?? '#'}>
      <Anchor />
    </NextLink>
  );
}
