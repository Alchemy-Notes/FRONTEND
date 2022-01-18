import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/';
import { UserProvider } from '../../../context/UserContext';
import EditNote from './EditNote';

it('should render our button to log into github', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <EditNote />
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
