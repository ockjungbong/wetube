import express from "express";
import  routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo
} from "../controllers/videoControllers";
import { uploadViedo } from "../middlewares";

const videoRouter = express.Router();

// /:id/edit
// console.log(routes.editVideo());

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadViedo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
