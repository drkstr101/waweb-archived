import React from 'react';
import { Roboto } from '../../base-ui.theme/fonts/roboto';
import { IconFont } from '../../design.theme/icons-font';
import { Theme, ThemeProps } from './theme-provider';

export function ThemeCompositions(props: ThemeProps) {
  return (
    <Theme {...props}>
      <IconFont query="eo46cx" />
      <Roboto />
      {props.children}
    </Theme>
  );
}
