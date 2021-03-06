import routes from "../routes";
import Video from "../models/Video";

// async : 특정 function의 어떤 부분을 기다리게 함
export const home = async(req, res) => {
    try {
        // await 부분이 끝나기 전까지는 render 실행하지 않음
        const videos = await Video.find({});
        res.render("Home", { pageTitle : "Home", videos });
     } catch (error) {
         console.log(error);
         // error가 발생하면 videos 기본값 빈 배열
         res.render("Home", { pageTitle : "Home", videos: [] });
     }
};

export const search = (req, res) => {
   const {
       query : {term : searchingBy}
   } = req;
   //console.log(searhingBy);
   res.render("Search", { pageTitle : "Search", searchingBy, videoArray });
};

export const videos = (req, res) => { 
    res.send("Videos", { pageTitle : "Videos" });
};

export const getUpload = (req, res) => {
    res.render("Upload", { pageTitle : "Upload" });
};

export const postUpload = async (req, res) => {
    const { 
        body: { title, description},
        file: { path } 
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });

    console.log(newVideo);
    // To Do : Upload and save video
   res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async(req, res) => {
   const {
       params: {id}
   } = req;

   try {
       const video = await Video.findById(id);
       console.log(video);
        res.render("VideoDetail", { pageTitle : "VideoDetail", video });
   } catch(error) {
       res.redirect(routes.home);
   }
};

export const getEditVideo = async (req,res) => {
    const {
        params: {id}
    } = req;

    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle : `Edit ${video.title}`, video });        
    } catch(error) {
        res.redirect(routes.home);
    }
}
    
export const postEditVideo = async (req, res) => {
    const {
        params: {id},
        body: { title, description }
    } = req;

    try {
        await Video.findOneAndUpdate({ _id : id }, {title, description });
        res.redirect(routes.videoDetail(id));
    } catch(error) {
        res.redirect(routes.home);
    }
 
};

export const postEditVideo = (req, res) => {};

export const deleteVideo = (req, res) => {
    res.render("DeleteVideo", { pageTitle : "Delete Video" });

};