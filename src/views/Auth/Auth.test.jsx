import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/';
import { ThemeProvider } from '../../context/ThemeContext';
import { UserProvider } from '../../context/UserContext';
import Auth from './Auth';

it('should render our button to log into github', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <ThemeProvider>
          <Auth />
        </ThemeProvider>
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
