import { config } from "./Config"

const API = {
    auth: {
      signUp: config.API_SERVER + config.API_URL + "/auth/register",
      signIn: config.API_SERVER + config.API_URL + "/auth/login",
    },

    user: {
      findById: config.API_SERVER + config.API_URL + "/users",
    },
}  

export { API }