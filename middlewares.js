import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    console.log("")
    console.log("localMiddleware");
    console.log("")
    
    // 다음 함수로 넘어간다
    next();
};