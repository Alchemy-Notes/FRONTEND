import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import UserForm from './UserForm';

it('should display an empty user form for signing up/in', () => {
  const { container } = render(
    <UserProvider>
      <UserForm />
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
