import React from 'react';
import { primaryPalette } from './index';

const colors = [
  '--wa-text-color',
  '--wa-text-color-heavy',
  '--wa-text-color-light',
  '--wa-text-inactive',
  '--wa-border-color',
  '--wa-border-color-heavy',
  '--wa-border-color-light',
  '--wa-border-color-lightest',
  '--wa-accent-color',
  '--wa-accent-heavy',
  '--wa-accent-light',
  '--wa-accent-text',
  '--wa-accent-text-heavy',
  '--wa-text-on-accent',
  '--wa-accent-bg',
  '--wa-accent-bg-heavy',
  '--wa-bg-color',
  '--wa-bg-heavy',
  '--wa-bg-heaviest',
  '--wa-bg-heaviest',
  '--wa-bg-bedrock',
  '--wa-bg-navigation',
  '--wa-bg-overlay',
  '--wa-bg-modal',
  '--wa-bg-tooltip',
  '--wa-bg-tooltip-heavy',
  '--wa-bg-dent',
  '--wa-error-color',
  '--wa-error-heavy',
  '--wa-error-light',
  '--wa-error-bg',
  '--wa-error-bg-heavy'
];

export function Preview() {
  return (
    <div className={primaryPalette}>
      {colors.map((x) => (
        <ColorBox colorName={x} />
      ))}
    </div>
  );
}

function ColorBox({ colorName }: { colorName: string }) {
  return (
    <div style={{ display: 'flex', borderRadius: 4, marginBottom: 4 }}>
      <div
        style={{
          background: `var(${colorName})`,
          width: 20,
          height: 20,
          borderRadius: 4,
          marginRight: 8,
          border: '1px solid black'
        }}
      ></div>
      <div>{colorName}</div>
    </div>
  );
}
