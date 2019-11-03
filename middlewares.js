import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "upload/videos/"});

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    // 다음 함수로 넘어간다
    next();
};

export const uploadViedo = multerVideo.single('videoFile');