import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

it('should render AboutUs comp', () => {
  const { container } = render(
    <MemoryRouter>
      <AboutUs />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
