export default async function name(query) {
  const url = `https://app.nishath.com.bd/graphql`;
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }
  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });

  // const resJson = await res.json();
  // if (res.condition) {
  const resJson = await res.json();
  return resJson;
  // }
  // return true;
}
