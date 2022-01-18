export const getUserTags = async (userId) => {
  const res = await fetch(
    `https://alchemy-noted.herokuapp.com/api/tags/${userId}`,
    {}
  );
};
