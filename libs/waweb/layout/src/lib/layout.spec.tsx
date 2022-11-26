import { render } from '@testing-library/react';
import Layout from './layout';

describe('waweb.layout', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Layout>
        <div>Hello, World!</div>
      </Layout>
    );
    expect(container).toBeInstanceOf(HTMLDivElement);
    expect(container).toMatchSnapshot();
  });
});
