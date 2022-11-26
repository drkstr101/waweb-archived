import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './reuse-components.module.scss';

import { fourWayGrid } from '../../base-ui.layout/grid-presets/four-way-grid';

import { PossibleSizes } from '../../base-ui.theme/sizes';
import { Paragraph } from '../../base-ui.elements/paragraph';
import { text, alignItems, marginCenter } from '../../base-ui.layout/align';
import { Grid } from '../../base-ui.layout/grid-component';
import { textColumn } from '../../base-ui.layout/page-frame';

import { Image } from '../../waweb.elements/image';
import { H2, H3 } from '../../waweb.elements/heading';
import { links } from '../../waweb.content/links';

const { xs, sm, xl } = PossibleSizes;

/**
 * @name ReuseComponents
 * @description
 * A static section, showing how bit can be used to share and sync code between projects and people.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function ReuseComponents(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(props.className, text.center)}
      data-bit-id="waweb.sections/reuse-components"
    >
      <div className={clsx(textColumn, marginCenter)}>
        <H2 size={sm}>Host and share components in the cloud</H2>
        <Paragraph size={xl} className={clsx(styles['subtitle'])}>
          Build better together with a reusable component marketplace for your organization.
          Collaborate and integrate to speed up delivery.
        </Paragraph>
      </div>

      <Grid className={clsx(text.center, text.sm.left, fourWayGrid, alignItems.center)}>
        <div className={styles['text']}>
          <H3 size={xs}>Find and use any component</H3>
          <Paragraph>
            Install components directly from the {links.siteDisplayName} registry using your
            favorite package manager, or bring your own registry or Artifactory. Your choice.
          </Paragraph>
        </div>
        <Image alt="multi packagers" src="homepage-bit/reuse-page/packagers.png" fullWidth />

        <div className={styles['text']}>
          <H3 size={xs}>Access source-code and contribute changes</H3>
          <Paragraph>
            Clone components into your local dev workspace and contribute changes without
            painful context switching.
          </Paragraph>
        </div>
        <Image alt="cloud code" src="homepage-bit/reuse-page/cloud-code.png" fullWidth />
        <div className={styles['text']}>
          <H3 size={xs}>Central component marketplace</H3>
          <Paragraph>
            Collaborate on components across teams and projects to build component-driven apps
            together efficiently, consistently, and at scale.
          </Paragraph>
        </div>
        <Image alt="cloud components" src="homepage-bit/reuse-page/cloud-scope.png" fullWidth />

        <div className={styles['text']}>
          <H3 size={xs}>Drive collaboration and adoption for components</H3>
          <Paragraph>
            Watheia Labs makes it easy to create, adopt, and collaborate on components.
            Democratize innovation and empower product teams to build together.
          </Paragraph>
        </div>
        <Image
          alt="components community"
          src="homepage-bit/reuse-page/component-community.png"
          fullWidth
        />
      </Grid>
    </div>
  );
}
