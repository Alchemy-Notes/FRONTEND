export const loginWithGitHub = async () => {
  window.location.replace(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scopes=read:user`
  );
};
