export function login(credintials) {
  return new Promise((res, rej) => {
    axios.post('/api/login', credintials)
      .then((response) => {
        res(response.data);
      })
      .catch((err) => {
        rej('wrogn email or password');
      })
  })
}

export function getLocalUser() {
  const userStr = localStorage.getItem("user");
  if(!userStr) {
    return null;
  }

  return JSON.parse(userStr);

}
