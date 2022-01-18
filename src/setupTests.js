global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));

jest.mock('react-markdown', () => (props) => {
  return <>{props.children}</>;
});
