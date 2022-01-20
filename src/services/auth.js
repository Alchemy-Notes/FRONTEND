export const loginWithGitHub = async () => {
  window.location.replace(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scopes=read:user`
  );
};

export const codeExchange = async (code) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/verifygithub`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  return res.json();
};

export const signupUser = async ({ username, password }) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const signinUser = async ({ username, password }) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  return res.json();
};

export const getMe = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/me`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(res);
  if (res.status === 200) return res.json();
  else return { id: '', username: '' };
};
