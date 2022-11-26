import React, { HTMLAttributes } from 'react';

import clsx from 'clsx';

import { Paragraph } from '../../base-ui.elements/paragraph';
import { PossibleSizes } from '../../base-ui.theme/sizes';
import { marginCenter } from '../../base-ui.layout/align';
import { textColumn } from '../../base-ui.layout/page-frame';

import { H2 } from '../../waweb.elements/heading';
import { Image } from '../../waweb.elements/image';

import styles from './develop-components.module.scss';

/**
 * @name DevelopComponents
 * @description
 * A section of static content, showing how Watheia Labs breaks down complicated websites.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function DevelopComponents(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} data-bit-id="waweb.sections/develop-components">
      <div className={clsx(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm} className={styles['title']}>
          Split app development to independent components and teams
        </H2>
        <Paragraph size={PossibleSizes.lg} className={clsx(styles['subtitle'])}>
          Say goodbye to monolithic web apps, and hello to component-driven apps composed of
          independent components built by autonomous teams working side by side.
        </Paragraph>
      </div>
      <Image alt="bit" src="homepage-bit/assets/booking-breakdown.png" fullWidth />
    </div>
  );
}
