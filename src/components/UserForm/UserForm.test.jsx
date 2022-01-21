import { render } from '@testing-library/react';
import { ThemeProvider } from '../../context/ThemeContext';
import { UserProvider } from '../../context/UserContext';
import UserForm from './UserForm';

it('should display an empty user form for signing up/in', () => {
  const { container } = render(
    <UserProvider>
      <ThemeProvider>
        <UserForm />
      </ThemeProvider>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
