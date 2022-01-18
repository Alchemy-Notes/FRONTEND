import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/';
import { UserProvider } from '../../context/UserContext';
import Hamburger from './Hamburger';

it('should render our button to log into github', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <Hamburger />
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
