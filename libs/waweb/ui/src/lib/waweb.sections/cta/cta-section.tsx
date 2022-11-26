import React from 'react';
import classNames from 'clsx';

import styles from './cta-section.module.scss';

import { H2 } from '../../waweb.elements/heading';
import { PossibleSizes } from '../../base-ui.theme/sizes';
import { Paragraph } from '../../base-ui.elements/paragraph';
import { Grid } from '../../base-ui.layout/grid-component';
import { justifyItems, alignItems, text } from '../../base-ui.layout/align';
import { Link } from '../../waweb.elements/link';
import { Button } from '../../waweb.elements/button';

type CtaProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * @name CtaSection
 * @description
 * Best section yet! Encourage the user to signup with a big and responsive call to action.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function CtaSection(props: CtaProps) {
  const { ...rest } = props;

  return (
    <Grid
      {...rest}
      colSm={2}
      className={classNames(
        props.className,
        styles['ctaSection'],
        justifyItems.center,
        alignItems.center,
        text.center,
        text.sm.left
      )}
      data-bit-id="waweb.sections/cta"
    >
      <div>
        <H2 size={PossibleSizes.xs}>Start your project today!</H2>
        <Paragraph size={PossibleSizes.lg}>
          Empower your team to build faster together.
        </Paragraph>
      </div>
      <Link href="/signup">
        <Button importance="cta">Get free consultation</Button>
      </Link>
    </Grid>
  );
}
