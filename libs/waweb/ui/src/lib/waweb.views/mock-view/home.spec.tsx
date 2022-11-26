import { render } from '@testing-library/react';

import HomeView from './home';

describe('HomeView', () => {
  it('should render successfully', () => {
    const { container } = render(<HomeView />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});
