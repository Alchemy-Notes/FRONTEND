import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';
import AboutUs from './AboutUs';

it('should render AboutUs comp', () => {
  const { container } = render(
    <MemoryRouter>
      <ThemeProvider>
        <AboutUs />
      </ThemeProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
