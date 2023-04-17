import { login, register } from "../controllers/auth.controller.js";
import { Router } from "express";
import passport from "passport";

const authRoute = Router();

authRoute.post("/register", passport.authenticate("register"), register);

authRoute.post(
  "/login",
  passport.authenticate("local", {session: false} ),
  login
);

export default authRoute;
