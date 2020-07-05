export default async function getPosts() {
  const url = `${process.env.REACT_APP_BACKEND_API}/post/`;
  const token = localStorage.getItem("token");
  const result = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  });
  const body = await result.json();
  const posts = await body.posts;
  return posts;
}
