export const loginWithGitHub = async () => {
  const response = await fetch(
    'https://alchemy-noted.herokuapp.com/api/auth/login'
  );

  const user = await response.json();
  return user;
};
