import express from "express";
import  routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controllers/videoControllers";
import { uploadViedo } from "../middlewares";

const videoRouter = express.Router();


videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadViedo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
