export const getUserTags = async (userId) => {
  const res = await fetch(
    // `https://alchemy-noted.herokuapp.com/api/tags/${userId}`,
    `http://localhost:7890/api/tags/${userId}`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return res.json();
};
