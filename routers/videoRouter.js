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

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadViedo, postUpload);

// VIDEO_DETAIL
videoRouter.get(routes.videoDetail(), videoDetail);

// EDIT_VIDEO
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);


// DELETE_VIDEO
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
