import routes from "../routes";

export const home = (req, res) => {
    res.render("Home", { pageTitle : "Home", videoArray });
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
    console.log('gettUpload');
    
    res.render("Upload", { pageTitle : "Upload" });
};

export const postUpload = (req, res) => {
    console.log('postUpload');
    const {
        body: { file, title, description }
    } = req;
    // To Do : Upload and save video
    res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => {
    console.log("VideoDetail");
    res.render("VideoDetail", { pageTitle : "VideoDetail" });
};

export const editVideo = (req, res) => {
    console.log("Edit Video")
    res.render("EditVideo", { pageTitle : "Edit Video" });
};

export const deleteVideo = (req, res) => {
    res.render("DeleteVideo", { pageTitle : "Delete Video" });

};