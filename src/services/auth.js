export const loginWithGitHub = async () => {
  //If there is a code, useEffect hook

  window.location.replace(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scopes=read:user`
  );
};

export const codeExchange = async (code) => {
  const res = await fetch(
    'https://alchemy-noted.herokuapp.com/api/auth/verifygithub',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    }
  );
  return res.json();
};
