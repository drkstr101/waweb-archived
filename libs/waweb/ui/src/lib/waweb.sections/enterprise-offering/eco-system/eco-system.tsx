import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import { Paragraph } from '../../../base-ui.elements/paragraph';
import { PossibleSizes } from '../../../base-ui.theme/sizes';
import { mutedText } from '../../../base-ui.text/muted-text';

import { H2 } from '../../../waweb.elements/heading';
import { textColumn } from '../../../base-ui.layout/page-frame';
import { marginCenter } from '../../../base-ui.layout/align';

/**
 * Title and description to the Watheia Labs integrations ecosystem.
 * @name EcoSystem
 */
export const EcoSystem = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} data-bit-id="waweb.sections/enterprise-offering/eco-system">
      <H2 size={PossibleSizes.sm}>Rooted in your ecosystem</H2>
      <Paragraph
        className={classNames(mutedText, textColumn, marginCenter)}
        size={PossibleSizes.lg}
      >
        Watheia Labs integrates into your software-building toolchain and plays with your
        ecosystem. Get advanced and custom integrations to boost delivery.
      </Paragraph>
    </div>
  );
};
