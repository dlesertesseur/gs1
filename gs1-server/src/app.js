import express from "express";
import passport from "passport";
import flash from "express-flash";
import authRoute from "./routes/auth.route.js";
import initializePassport from "./config/passport.config.js";
import userRoute from "./routes/user.route.js";
import panelsRoute from "./routes/panels.route.js";
import cookieParser from "cookie-parser";
import config from "./config/config.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://192.168.0.10:5173", credentials: true }));
app.use(flash());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

/*Inicializa la configuracion de passport */
initializePassport();

app.use(passport.initialize());

app.use("/api/gs1/v1/auth", authRoute);
app.use("/api/gs1/v1/users", userRoute);
app.use("/api/gs1/v1/panels", panelsRoute);

//app.use('/', (req, res) => {res.redirect("/api/auth/login")});

const httpServer = app.listen(config.PORT, () => {
  console.log(`Server running on port: ${httpServer.address().port}`);
});
httpServer.on("error", (error) => console.log("Server error -> ", error));
