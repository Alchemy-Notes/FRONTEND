export const getUserTags = async (userId) => {
  const res = await fetch(
    `https://alchemy-noted.herokuapp.com/api/tags/${userId}`,
    {
      method: 'GET',
      headers: {
        credentials: 'include',
        'Content-Type': 'application/json',
      },
    }
  );

  return res.json();
};
