import { API } from "../config/Api";

const findById = async (parameters) => {
  
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
  
    console.log("############ findById ->",data)

    return {
      user: parameters.email,
      error: data.error,
      errorMessage: data.errorMessage,
    };
  };


  export {findById}