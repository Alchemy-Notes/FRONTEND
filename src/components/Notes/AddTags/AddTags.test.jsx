import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom/';
import { UserProvider } from '../../../context/UserContext';
import AddTags from './AddTags';
import App from '../../../App';

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

const mockedTags = ['react', 'fullstack', 'components', 'mocking'];

const server = setupServer(
  rest.get(
    'https://alchemy-noted.herokuapp.com/api/auth/tags',
    (req, res, ctx) => {
      return res(ctx.json(mockedTags));
    }
  ),
  rest.post(
    'https://alchemy-noted.herokuapp.com/api/auth/tags',
    (req, res, ctx) => {
      return res(ctx.json[mockedTags]);
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('should add a new tag to the list of tags', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <AddTags />
      </UserProvider>
    </MemoryRouter>
  );
  const input = await screen.findByRole('textbox');
  const button = await screen.findByRole('button', { name: 'tag-submit' });
  userEvent.type(input, 'javascript');
  userEvent.click(button);
});
