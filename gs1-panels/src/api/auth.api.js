import { API } from "../config/Api";

function getCookie(cookies, key) {
  const regexp = new RegExp(`.*${key}=([^;]*)`);
  const result = regexp.exec(cookies);
  if (result) {
    return result[1];
  }
}

const login = async (parameters) => {
  const body = JSON.stringify({
    email: parameters.email,
    password: parameters.password,
  });

  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
    body: body,
  };

  const url = API.auth.signIn;
  const res = await fetch(url, requestOptions);
  const data = await res.json();

  return {
    user: parameters.email,
    error: data.error,
    errorMessage: data.errorMessage,
    token: data.token,
    id:data.id
  };
};

export { login };
