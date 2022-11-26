import React, { HTMLAttributes } from 'react';
import classNames from 'clsx';

import { Card } from '../../../base-ui.surfaces/card';
import { PossibleSizes } from '../../../base-ui.theme/sizes';
import { mutedText } from '../../../base-ui.text/muted-text';
import { TextSeparator } from '../../../base-ui.text/text-separator';
import { fullWidth, marginCenter } from '../../../base-ui.layout/align';

import { Button } from '../../../waweb.elements/button';
import { H4 } from '../../../waweb.elements/heading';

import styles from './sales-cta.module.scss';
import { margin } from '../../../waweb.layout/experimental/spacing';
import { ContactForm } from './contact-form';
import { ContactValues } from './contact-values';
import { Paragraph } from '../../../base-ui.elements/paragraph';

export type EnterpriseCtaProps = {
  /** handles form submission, with user input as a single object parameter. Return a promise to show loader */
  onSubmitCta?: (values: ContactValues) => any | Promise<any>;
  /** handles 'book a meeting' call to action. Return a promise to show loader */
  onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A call-to-action section, allowing enterprise users to contact us directly from the Enterprise page.<br/>
 * Form is managed by Formik, and validated by Yup.
 * @param SalesCta
 */
export const SalesCta = (props: EnterpriseCtaProps) => {
  const { onSubmitCta, onBookMeeting, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={classNames(styles['particlesBg'], className)}
      data-bit-id="waweb.sections/enterprise-offering/sales-cta"
    >
      <Card id="lets-talk" className={classNames(styles['formCard'], marginCenter)}>
        <H4 size={PossibleSizes.xs}>Let’s talk </H4>
        <Paragraph className={classNames(margin[30], mutedText)}>
          Drop a message and we’ll get back to you shortly.
        </Paragraph>

        <ContactForm onSubmitMessage={onSubmitCta} />

        <TextSeparator className={classNames(mutedText, styles['margin'], styles['separator'])}>
          OR
        </TextSeparator>

        <Button
          importance="normal"
          onClick={onBookMeeting}
          className={classNames(fullWidth, styles['muted'])}
        >
          Book Intro
        </Button>
      </Card>

      <div className={styles['particlesContainer']}>
        <div className={styles['redParticle']} />
      </div>
    </div>
  );
};
