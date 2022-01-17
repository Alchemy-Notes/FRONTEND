import { render } from '@testing-library/react';
import { UserProvider } from '../../context/UserContext';
import GithubLogin from './GithubLogin';

it('should render our button to log into github', () => {
  const { container } = render(
    <UserProvider>
      <GithubLogin />
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
});
