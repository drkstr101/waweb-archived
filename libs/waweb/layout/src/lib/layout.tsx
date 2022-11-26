import { SkipNavContent } from '@reach/skip-nav';
import { useConfig } from '@watheia/waweb.config';
// import {
//   seoGenerateMetaDescription,
//   seoGenerateMetaTags,
//   seoGenerateTitle
// } from '@watheia/utils';
import { MessageList, useMessage } from '@watheia/waweb.message';
import clsx from 'clsx';
import Head from 'next/head';
import { CSSProperties, ReactChild, ReactFragment, ReactPortal } from 'react';
import Footer from './footer';
import Header from './header';
import styles from './layout.module.css';
import NProgress from './nprogress';
import ResizeHandler from './resize-handler';
import ViewSource from './view-source';

export interface LayoutProps {
  useBackdrop?: boolean;
  hideNav?: boolean;
  usePadding?: boolean;
  layoutStyles?: CSSProperties;
  children: boolean | ReactChild | ReactFragment | ReactPortal | null;
}

export default function Layout({
  usePadding = false,
  layoutStyles = {},
  ...props
}: LayoutProps) {
  // const pageMeta = page.__metadata;
  // const title = seoGenerateTitle(page, site);
  // const metaTags = seoGenerateMetaTags(page, site);
  // const metaDescription = seoGenerateMetaDescription(page, site);
  const { messages } = useMessage();
  const config = useConfig();

  return (
    <>
      <Head>
        {/* <title>{title}</title> */}
        {/* {metaDescription && <meta name="description" content={metaDescription} />} */}
        {/* {metaTags.map((metaTag) => {
              if (metaTag.format === 'property') {
                // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
                return (
                  <meta
                    key={metaTag.property}
                    property={metaTag.property}
                    content={metaTag.content}
                  />
                );
              }
              return (
                <meta
                  key={metaTag.property}
                  name={metaTag.property}
                  content={metaTag.content}
                />
              );
            })} */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ViewSource repo={config.repo} />
      <div className={clsx(props.useBackdrop ? styles['backdrop'] : styles['layout'])}>
        {!props.hideNav && config.header && <Header {...config.header} />}
        <div className={styles['page']}>
          <MessageList messages={messages} />
          <div
            className={clsx(styles['main'], usePadding && 'px-2 py-6 sm:px-6 lg:px-8')}
            style={layoutStyles}
          >
            <div className={clsx(styles['full'])}>
              <SkipNavContent />
              {props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <NProgress />
      <ResizeHandler />
    </>
  );
}
