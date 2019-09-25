import express from "express";
import morgan from "morgan";  // logger
import helmet from "helmet";  // security
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use(helmet());
app.use(morgan("dev"));


app.get("/",  handleHome);

app.get("/profile", handleProfile);


