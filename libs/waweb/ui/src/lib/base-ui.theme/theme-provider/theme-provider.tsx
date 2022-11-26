import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import { headingFontSize, textFontSize } from '../size-definition';
import { shadowTheme } from '../shadow-definition';
import { primaryPalette } from '../color-definition';
import { brands } from '../brand-definition';
import { headingMargins } from '../heading-margin-definition';
import { bookFont } from '../fonts/book';
import texts from './texts.module.scss';

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        headingFontSize,
        textFontSize,
        bookFont,
        shadowTheme,
        primaryPalette,
        brands,
        headingMargins,
        texts['defaults'],
        props.className
      )}
    ></div>
  );
}
