const ENDPOINT = "https://reqres.in";

export default async function login({ email, password }) {
  return await fetch(`${ENDPOINT}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    })
    .then((res) => {
      const { token } = res;
      return token;
    });
}
