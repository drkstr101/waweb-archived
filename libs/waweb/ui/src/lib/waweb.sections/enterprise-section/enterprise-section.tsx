import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import { PossibleSizes } from '../../base-ui.theme/sizes';
import { Paragraph } from '../../base-ui.elements/paragraph';

import { text, alignItems } from '../../base-ui.layout/align';
import { Grid } from '../../base-ui.layout/grid-component';
import { colSpanMd } from '../../base-ui.layout/col-span';

import { Image } from '../../waweb.elements/image';
import { H2 } from '../../waweb.elements/heading';
import { Icon } from '../../waweb.elements/icon';
import { Link } from '../../waweb.elements/link';
import { Button } from '../../waweb.elements/button';

import styles from './enterprise-section.module.scss';

/**
 * @name EnterpriseSection
 * @description
 * A section of static content, presenting Watheia Labs's cloud platform.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function EnterpriseSection(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(text.center, props.className)}
      data-bit-id="waweb.sections/enterprise-section"
    >
      <Grid
        col={1}
        colMd={12}
        className={classNames(text.left, alignItems.center, styles['content'])}
      >
        <div className={colSpanMd[7]}>
          <H2 size={PossibleSizes.sm}>
            Join the world's best teams on the enterprise component cloud
          </H2>
          <Paragraph size={PossibleSizes.lg} className={styles['paragraph']}>
            Empower teams in your organization to deliver features and innovate autonomously
            while continuously collaborating on each other's components and building world-class
            products together.
          </Paragraph>
          <Link href="/contact-sales">
            <Button className={styles['contactButton']} importance="cta" elevation="medium">
              Talk to Us
              <Icon of="right_arrow" className={styles['linkArrow']} />
            </Button>
          </Link>
        </div>
        <div className={colSpanMd[5]}>
          <Image
            fullWidth
            alt="cloud components"
            src="homepage-bit/reuse-page/cloud-components.png"
          />
        </div>
      </Grid>
    </div>
  );
}
