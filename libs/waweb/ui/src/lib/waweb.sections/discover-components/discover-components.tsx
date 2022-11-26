import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import styles from './discover-components.module.scss';

import { PossibleSizes } from '../../base-ui.theme/sizes';

import { Grid } from '../../base-ui.layout/grid-component';
import { zGrid, halfZGrid } from '../../base-ui.layout/grid-presets/z-grid';
import { text, alignItems, marginCenter } from '../../base-ui.layout/align';
import { textColumn } from '../../base-ui.layout/page-frame';
import { Paragraph } from '../../base-ui.elements/paragraph';

import { H2, H3 } from '../../waweb.elements/heading';
import { Image } from '../../waweb.elements/image';

/**
 * @name DiscoverComponents
 * @description
 * A section of static content, detailing the Watheia Labs's documentation features.
 * Assumes the consuming component to supply a className, with width and other styles.
 */

export function DiscoverComponents(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(props.className)}
      data-bit-id="waweb.sections/discover-components"
    >
      <div className={classNames(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm} className={text.center}>
          Stunning docs and simple discovery
        </H2>

        <Paragraph
          size={PossibleSizes.lg}
          className={classNames(text.center, styles['subtitle'])}
        >
          Forget about maintaining additional docs, websites, wikis, and tools. Watheia Labs
          makes sure every single component is documented, organized and discoverable at any
          scale.
        </Paragraph>
      </div>

      <Grid colMd={12} className={classNames(text.left, zGrid, alignItems.center)}>
        <div>
          <H3 size={PossibleSizes.xs}>The most advanced component explorer ever</H3>
          <Paragraph>
            Looking for a React button component with up to 30kb bundle-size, styled with
            styled-components, and tested with Jest? Easy, just hit "search".
          </Paragraph>
        </div>

        <Image src="homepage-bit/5-orginze.png" alt="components search" fullWidth />

        <div>
          <H3 size={PossibleSizes.xs}>Write code, generate stunning docs</H3>
          <Paragraph>
            With Watheia Labs, you can focus on writing code and watch how every component’s
            documentation is generated, updated and maintained automatically. Have a coffee.
          </Paragraph>
        </div>
        <Image src="homepage-bit/button-docs.png" alt="generated docs" fullWidth />
      </Grid>
      <Grid
        colMd={12}
        className={classNames(text.left, halfZGrid, alignItems.center, styles['singleGrid'])}
      >
        <div>
          <H3 size={PossibleSizes.xs}>Play with examples hands-on</H3>
          <Paragraph>
            The best way to experience a component is to try it hands-on. Watheia Labs’s
            hot-reloading playground lets you quickly learn how components work and save
            examples.
          </Paragraph>
        </div>

        <Image src="homepage-bit/playground.png" alt="playground" fullWidth />
      </Grid>
    </div>
  );
}
