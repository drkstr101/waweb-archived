import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import { PossibleSizes } from '../../base-ui.theme/sizes';

import { textColumn } from '../../base-ui.layout/page-frame';
import { marginCenter } from '../../base-ui.layout/align';

import { CommentCarousel } from '../../waweb.marketing/comment-carousel';
import { bitTestimonials } from '../../waweb.content/bit-testimonials';
import { H2 } from '../../waweb.elements/heading';

import styles from './carouselSection.module.scss';

/**
 * @name CarouselSection
 * @description
 * A section showing real users testimonials about the product.
 * Using **CommentCarousel** (react-slick), and content from **bit-testimonials**.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function CarouselSection(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={props.className}>
      <div className={classNames(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm} className={styles['heading']}>
          Trusted by over 200,000 developers
        </H2>
      </div>
      <CommentCarousel content={bitTestimonials} />
    </div>
  );
}
