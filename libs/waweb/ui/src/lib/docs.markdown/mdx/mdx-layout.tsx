import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'clsx';
import { MDXProvider } from '@mdx-js/react';
import styles from './mdx-layout.module.scss';
import { useComponents } from '../../use-components';
import { Components } from '../../types';

export interface MDXLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  components: Components;
}

export function MDXLayout({
  children,
  components,
  className,
  ...rest
}: MDXLayoutProps): JSX.Element {
  const _components: Components = useComponents(components);

  return (
    <MDXProvider components={_components}>
      <div className={classNames(styles['mdxContent'], className)} {...rest}>
        {children}
      </div>
    </MDXProvider>
  );
}
