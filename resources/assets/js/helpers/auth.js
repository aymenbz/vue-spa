export function login(credintials) {
  return new Promise((res, rej) => {
    axios.post('/api/login', credintials)
      .then((response) => {
        res(response.data);
      })
      .catch((err) => {
        rej('wrong email or password');
        console.log(err)
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
