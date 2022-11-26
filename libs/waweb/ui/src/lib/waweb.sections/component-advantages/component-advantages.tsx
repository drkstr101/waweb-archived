import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import styles from './component-advantages.module.scss';

import { PossibleSizes } from '../../base-ui.theme/sizes';
import { Paragraph } from '../../base-ui.elements/paragraph';
import { text, alignItems } from '../../base-ui.layout/align';
import { Grid } from '../../base-ui.layout/grid-component';
import { fourWayGrid } from '../../base-ui.layout/grid-presets/four-way-grid';

import { Image } from '../../waweb.elements/image';
import { H3 } from '../../waweb.elements/heading';

/**
 * @name ComponentsAdvantages
 * @description
 * A section detailing the advantages of components, their isolation, and interoperability between projects.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function ComponentsAdvantages(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(props.className)}
      data-bit-id="waweb.sections/component-advantages"
    >
      <Grid
        colMd={12}
        className={classNames(text.center, text.sm.left, fourWayGrid, alignItems.center)}
      >
        <div className={styles['text']}>
          <H3 size={PossibleSizes.xs}>Build independent components</H3>
          <Paragraph>
            Develop independent components with decoupled codebases, versions, and build
            pipelines. Enjoy a dev experience like in a single project.
          </Paragraph>
        </div>
        <Image
          alt="editor with component"
          src="homepage-bit/editor-logo-comp.png"
          className={styles['img']}
          fullWidth
        />

        <div className={styles['text']}>
          <H3 size={PossibleSizes.xs}>
            Compose components to create infinite features and apps
          </H3>
          <Paragraph>
            Compose components via dependencies and create infinite new features and
            applications while easily controlling each component's version.
          </Paragraph>
        </div>
        <Image
          alt="smart versioning"
          src="homepage-bit/example-008.png"
          className={styles['img']}
          fullWidth
        />

        <div className={styles['text']}>
          <H3 size={PossibleSizes.xs}>Create custom dev envs with your favorite tools</H3>
          <Paragraph>
            Compose your favorite dev tools into dev environments you can reuse across
            components and projects to speed and standardize development.
          </Paragraph>
        </div>
        <Image
          alt="dev tools integrations"
          src="homepage-bit/devtools.png"
          className={styles['img']}
          fullWidth
        />

        <div className={styles['text']}>
          <H3 size={PossibleSizes.xs}>No config overhead</H3>
          <Paragraph>
            Watheia Labs automates the overhead of manual configs for every component so that
            you can focus on creating and composing components.
          </Paragraph>
        </div>
        <Image
          alt="goodbye conf files"
          src="homepage-bit/goodbye-configuration-files.png"
          className={styles['img']}
          fullWidth
        />
      </Grid>
    </div>
  );
}
