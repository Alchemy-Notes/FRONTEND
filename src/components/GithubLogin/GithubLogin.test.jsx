import { render } from '@testing-library/react';
import { ThemeProvider } from '../../context/ThemeContext';
import { UserProvider } from '../../context/UserContext';
import GithubLogin from './GithubLogin';

it('should render our button to log into github', () => {
  const { container } = render(
    <UserProvider>
      <ThemeProvider>
        <GithubLogin />
      </ThemeProvider>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
