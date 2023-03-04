export const getCities = async () => {
  const response = await fetch("http://localhost:3001/cities");
  const data = await response.json();
  return data;
};

export const getRoutes = async () => {
  const response = await fetch("http://localhost:3001/routes");
  const data = await response.json();
  return data;
};

export const getComments = async () => {
  const response = await fetch("http://localhost:3001/comments");
  const data = await response.json();
  return data;
};
