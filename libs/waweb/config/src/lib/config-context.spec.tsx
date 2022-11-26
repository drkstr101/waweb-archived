import React from 'react';
import { render } from '@testing-library/react';
import useConfig from './use-config';

const MockComponent = () => {
  const config = useConfig();
  return (
    <a data-testid="mock-component" href={config.repo}>
      {config.footer.copyrightText}
    </a>
  );
};

it('should render the component with copyright text', () => {
  const { getByTestId } = render(<MockComponent />);
  const rendered = getByTestId('mock-component');
  expect(rendered).toBeTruthy();
});
