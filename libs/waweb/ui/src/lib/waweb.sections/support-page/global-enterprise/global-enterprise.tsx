import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import { Paragraph } from '../../../base-ui.elements/paragraph';
import { PossibleSizes } from '../../../base-ui.theme/sizes';
import { text, marginCenter } from '../../../base-ui.layout/align';
import { Card, CardProps } from '../../../base-ui.surfaces/card';
import { Grid } from '../../../base-ui.layout/grid-component';

import { Button } from '../../../waweb.elements/button';
import { H3, H2 } from '../../../waweb.elements/heading';
import { Image } from '../../../waweb.elements/image';

import styles from './global-enterprise.module.scss';
import { Link } from '../../../waweb.elements/link';

type GlobalEnterpriseProps = HTMLAttributes<HTMLElement>;

/**
 * Enterprise solution section for the Support offering page.
 * @name EcoSystem
 */
export function GlobalEnterprise({ className, ...rest }: GlobalEnterpriseProps) {
  const cards = [
    {
      iconUrl: 'support-page/support.svg',
      title: 'Response time SLA',
      text: "We'll respond quick and with effective solutions to make sure you never slow down.",
      alt: 'Watheia Labs - support time'
    },
    {
      iconUrl: 'support-page/bulb.svg',
      title: 'Expert consultation',
      text: "We'll review and consult on building a great front-end infrastructure and design-system.",
      alt: 'Watheia Labs - support consultation'
    },
    {
      iconUrl: 'support-page/team.svg',
      title: 'Team on-boarding',
      text: "We'll get your team up and running with Watheia Labs components from zero to hero.",
      alt: 'Watheia Labs - support team on-boarding'
    },
    {
      iconUrl: 'support-page/extensions.svg',
      title: 'Custom extensions, integrations',
      text: 'We’ll design and provide the solutions to root Watheia Labs into your enterprise ecosystem.',
      alt: 'Watheia Labs - custom extensions and integrations'
    }
  ];

  return (
    <div
      className={className}
      {...rest}
      data-bit-id="waweb.sections/support-page/global-enterprise"
    >
      <div className={classNames(styles['topSection'], marginCenter, text.center)}>
        <H2 size={PossibleSizes.sm}>We support global enterprises</H2>
        <Paragraph size={PossibleSizes.lg} className={styles['paragraph']}>
          Watheia Labs enterprise helps global teams to speed up and standardize modern web
          development. We’re here to help hands-on every step of the way.
        </Paragraph>

        <div className={styles['buttons']}>
          <Link className={styles['link']} href="/contact-sales?redirectUri=%2Fsupport-plans">
            <Button className={styles['button']} importance="cta">
              Contact sales
            </Button>
          </Link>

          <div className={styles['spacer']} />

          <Link className={styles['link']} href="/enterprise">
            <Button className={styles['button']}>Watheia Labs enterprise</Button>
          </Link>
        </div>
      </div>
      <Grid colL={2} className={classNames(text.center, text.l.left, styles['mainGrid'])}>
        {cards.map((card, index) => (
          <GlobalEnterpriseCard
            key={index}
            iconUrl={card.iconUrl}
            title={card.title}
            text={card.text}
            alt={card.alt}
          />
        ))}
      </Grid>
    </div>
  );
}

type GlobalEnterpriseCardProps = {
  iconUrl: string;
  alt: string;
  title?: string;
  text?: string;
} & CardProps;

function GlobalEnterpriseCard({
  iconUrl,
  title,
  text,
  alt,
  className,
  ...rest
}: GlobalEnterpriseCardProps) {
  return (
    <Card
      elevation="low"
      roundness="medium"
      className={classNames(styles['card'], className)}
      {...rest}
    >
      <div className={styles['top']}>
        <Image alt={alt} src={iconUrl} className={styles['image']} />
        <H3 size={PossibleSizes.xs} className={styles['title']}>
          {title}
        </H3>
      </div>
      <Paragraph>{text}</Paragraph>
    </Card>
  );
}
