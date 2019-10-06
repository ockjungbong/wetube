import express from "express";
import morgan from "morgan";  // logger
import helmet from "helmet";  // security
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.set("view engine", "pug");
// 쿠기를 전달받아서 사용할 수 있게 해준다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(helmet());
app.use(morgan("dev"));
app.use(localMiddleware);

// 
app.use(routes.home, globalRouter)
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
