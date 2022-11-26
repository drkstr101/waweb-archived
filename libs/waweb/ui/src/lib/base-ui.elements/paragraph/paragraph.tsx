import classNames from 'clsx';
import React, { ComponentType, HTMLAttributes, HtmlHTMLAttributes } from 'react';
import { PossibleSizes } from '../../base-ui.theme/sizes';
import { textSize } from '../../base-ui.text/text-sizes';

export { PossibleSizes };

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Font size (from a list of presets).
   */
  size?: PossibleSizes;
  /**
   * The underlying dom element
   */
  element?:
    | keyof JSX.IntrinsicElements
    | ComponentType<HtmlHTMLAttributes<HTMLParagraphElement>>
    | ComponentType<any>;
}

/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element,
 * @name paragraph
 * @example
 * <Paragraph size="sm">This is some text</Paragraph>
 */
export function Paragraph({
  className,
  size = PossibleSizes.md,
  element: Element = 'p',
  ...rest
}: ParagraphProps) {
  return (
    <Element
      className={classNames(textSize[size], className)}
      data-bit-id="base-ui.elements/paragraph"
      {...rest}
    />
  );
}

export default Paragraph;
