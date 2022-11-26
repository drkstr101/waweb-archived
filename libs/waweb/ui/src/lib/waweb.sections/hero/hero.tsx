import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'clsx';
import Typewriter from 'typewriter-effect';

import { PossibleSizes } from '../../base-ui.theme/sizes';
import { text, marginCenter } from '../../base-ui.layout/align';
import { Paragraph } from '../../base-ui.elements/paragraph';
import { Grid } from '../../base-ui.layout/grid-component';
import { textColumn } from '../../base-ui.layout/page-frame';

import { H1 } from '../../waweb.elements/heading';
import { IconLine } from '../../waweb.elements/icon-line';
import { Link } from '../../waweb.elements/link';
import { Image } from '../../waweb.elements/image';
import { Button } from '../../waweb.elements/button';
import styles from './hero.module.scss';

const iconsArray = [
  'logo-react',
  'logo-vue',
  'logo-angular',
  'logo-web-components',
  'logo-nodejs',
  'logo-ts',
  'logo-js'
];

const typeWriterArray = [
  'build with components',
  'build micro frontends',
  'build design systems',
  'release features faster',
  'build web apps together'
];

type ReuseLandingProps = {
  /**
   * Placeholder for content, at the bottom of this section
   */
  mainCta?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * @name Hero
 * @description
 * The Main and first section the user sees as he enters the page.
 * Assumes a dark purplish background behind it.
 */

export function Hero(props: ReuseLandingProps) {
  return (
    <div data-bit-id="waweb.sections/hero" {...props}>
      <Grid colL={2} className={classNames(styles['mainGrid'], text.center, text.l.left)}>
        <div>
          <div>
            <H1 size={PossibleSizes.sm} className={styles['headline']}>
              How the best teams
              <br />
              <Typewriter
                onInit={() => void 0}
                options={{
                  strings: typeWriterArray,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50
                }}
              />
            </H1>
            <Paragraph
              size={PossibleSizes.lg}
              className={classNames(styles['paragraph'], textColumn, marginCenter)}
            >
              Watheia Labs is the platform for component-driven development. Forget monoliths
              and distribute app development to components. Enjoy better scale, speed, and
              consistency. Join 200k+ developers and start free.
            </Paragraph>
          </div>

          <Paragraph
            size={PossibleSizes.sm}
            element="div"
            className={classNames(styles['buttons'])}
          >
            <Link href="/signup">
              <Button importance="cta" elevation="medium">
                Get Started
              </Button>
            </Link>
            <div className={styles['spacer']} />
            <Link href="/contact-sales">
              <Button elevation="medium">Get a Demo</Button>
            </Link>
          </Paragraph>
          <IconLine icons={iconsArray} className={styles['icons']} />
        </div>

        <Image
          src="homepage-bit/process-2.svg"
          className={marginCenter}
          alt="illustration"
          fullWidth
        />
      </Grid>
    </div>
  );
}
