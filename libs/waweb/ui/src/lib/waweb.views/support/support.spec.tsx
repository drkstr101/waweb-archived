import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { SupportPageComposition } from './support.composition';

it('should render correctly', () => {
  const { getByTestId } = render(<SupportPageComposition />);
  const rendered = getByTestId('test-page');

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  expect(rendered).to.exist;
});
