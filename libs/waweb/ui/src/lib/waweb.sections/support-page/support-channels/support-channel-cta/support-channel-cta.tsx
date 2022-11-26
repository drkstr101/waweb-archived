import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import { Paragraph } from '../../../../base-ui.elements/paragraph';
import { PossibleSizes } from '../../../../base-ui.theme/sizes';
import { H6 } from '../../../../waweb.elements/heading';

import styles from './support-channel-cta.module.scss';
import { mutedText } from '../../../../base-ui.text/muted-text';

type ChannelButtonCtaProps = {
  title?: string;
  subTitle?: string;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export function ChannelButtonCta({
  title,
  subTitle,
  children,
  ...rest
}: ChannelButtonCtaProps) {
  return (
    <div className={classNames(styles['wrapper'])} {...rest}>
      <H6 size={PossibleSizes.xxs}>{title}</H6>
      <Paragraph size={PossibleSizes.md} className={classNames(mutedText, styles['paragraph'])}>
        {subTitle}
      </Paragraph>
      {children}
    </div>
  );
}
