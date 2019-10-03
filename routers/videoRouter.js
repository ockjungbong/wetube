import express from "express";
import  routes from "../routes";
import {
    videos,
    upload,
    videoDetail,
    eidtVideo,
    deleteVideo
} from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, eidtVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
