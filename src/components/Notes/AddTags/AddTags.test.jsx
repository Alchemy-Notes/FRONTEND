import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/';
import { UserProvider } from '../../../context/UserContext';
import AddTags from './AddTags';

it('should render our AddTags component', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <AddTags />
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
