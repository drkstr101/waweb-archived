import React from 'react';
import { render } from '@testing-library/react';

import IndexPage from '../pages/index';

describe('IndexPage', () => {
  it('should render successfully', async () => {
    const { container } = render(<IndexPage />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});
