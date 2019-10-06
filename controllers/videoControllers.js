import { request } from "https";

export const home = (req, res) => res.render("Home", { pageTitle : "Home" });

export const search = (req, res) => {
   const {
       query : {term : searchingBy}
   } = req;
   //console.log(searhingBy);
   res.render("Search", { pageTitle : "Search", searchingBy });
};

export const videos = (req, res) => { 
    res.send("Videos", { pageTitle : "Videos" });
};

export const upload = (req, res) => {
    res.render("Upload", { pageTitle : "Upload" });
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