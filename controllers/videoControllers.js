export const home = (req, res) => res.render("Home", { pageTitle : "Home" });
export const search = (req, res) => res.send("Search", { pageTitle : "Search" });
export const videos = (req, res) => res.send("Videos", { pageTitle : "Videos" });
export const upload = (req, res) => res.send("Upload", { pageTitle : "Upload" });
export const videoDetail = (req, res) => res.send("VideoDetail", { pageTitle : "VideoDetail" });
export const eidtVideo = (req, res) => res.send("Edit Video", { pageTitle : "Edit Video" });
export const deleteVideo = (req, res) => res.send("Delete Video", { pageTitle : "Delete Video" });