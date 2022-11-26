import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import { textColumn } from '../../../base-ui.layout/page-frame';
import { Paragraph } from '../../../base-ui.elements/paragraph';
import { PossibleSizes } from '../../../base-ui.theme/sizes';
import { colorPalette } from '../../../base-ui.theme/accent-color';
import { themedText } from '../../../base-ui.text/themed-text';
import { text } from '../../../base-ui.layout/align';
import { MutedText, mutedText } from '../../../base-ui.text/muted-text';

import { H2 } from '../../../waweb.elements/heading';

import styles from './powering-enterprise.module.scss';

/**
 * A section showing a summary of the Watheia Labs enterprise solution.
 * @name PoweringEnterprise
 */
export const PoweringEnterprise = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    data-bit-id="waweb.sections/enterprise-offering/powering-enterprise"
    className={classNames(
      props.className,
      text.center,
      text.l.left,
      styles['poweringEnterprise']
    )}
  >
    <CrunchTheNumbers />

    <div className={styles['separator']}></div>

    <div className={textColumn}>
      <H2 size={PossibleSizes.sm}>Powering application delivery at scale</H2>
      <Paragraph size={PossibleSizes.xl} className={mutedText}>
        Watheia Labs enterprise lets you build and ship modern web applications at scale. It
        empowers global teams to build faster and better with components.
      </Paragraph>
    </div>
  </div>
);

function CrunchTheNumbers() {
  return (
    <div className={classNames(text.center, styles['crunchTheNumbers'])}>
      <div>
        <div className={styles['emphasized']}>100%</div>
        <MutedText>Component reuse</MutedText>
      </div>
      <div className={colorPalette.process}>
        <div className={classNames(themedText, styles['emphasized'])}>10x</div>
        <MutedText>More releases</MutedText>
      </div>
      <div className={colorPalette.primary}>
        <div className={classNames(themedText, styles['emphasized'])}>90%</div>
        <MutedText>Faster integrations</MutedText>
      </div>
      <div className={colorPalette.complementary}>
        <div className={classNames(themedText, styles['xtraEmpthasized'])}>∞</div>
        <MutedText>Scale</MutedText>
      </div>
    </div>
  );
}
