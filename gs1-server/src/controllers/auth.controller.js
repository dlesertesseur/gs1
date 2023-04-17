import { generateAuthToken } from "../util/jwt.js";

const login = async (req, res) => {
  try {
    const user = req.user;
    if (user?.status) {
      res.status(user.status).send({
        error:user.status,
        errorMessage: user.message,
      });
    } else {
      const accessToken = generateAuthToken({
        id: user._id,
        email: user.email,
      });

      res
        .cookie("authToken", accessToken, { httpOnly: true })
        .send({
          message: "User authenticated successfully",
          token: accessToken,
          id:user._id
        });
    }
  } catch (error) {
    console.log("login -> ", error);
    throw error;
  }
};

const register = async (req, res) => {
  try {
    res.send({ message: "the user was successfully registered" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const logout = (req, res) => {
  res.clearCookie("authToken");
  res.redirect("/api/auth/login");
};

export { logout, login, register };
