import { API } from "../config/Api";

const findUserById = async (parameters) => {
  
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    };
  
    const url = API.user.findById + "/" + parameters.id;
    const res = await fetch(url, requestOptions);
    const data = await res.json();
  
    return ({
      firstName: data.firstName,
      lastName :data.lastName,
      role: data.role,
      error: data.error,
      email: data.email,
      errorMessage: data.errorMessage,
    });
  };


  export {findUserById}