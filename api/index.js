export const fetchUsers = async ({ page } = { page: 1 }) => {
  const res = await fetch(`https://reqres.in/api/users?page=${page}&per_page=5`);
  const data = await res.json();

  return data;
};
