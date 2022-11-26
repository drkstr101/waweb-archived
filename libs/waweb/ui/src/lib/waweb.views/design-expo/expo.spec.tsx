import { render } from '@testing-library/react';

import ExpoView from './expo';

describe('Expo', () => {
  it('should render successfully', () => {
    const { container } = render(<ExpoView />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});
