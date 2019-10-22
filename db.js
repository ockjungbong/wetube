import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser : true,
        useFindAndModify : false
    }
);

const db = mongoose.connection;

const hadleOpen = () => console.log("Connedted to DB");
const handleError = error => console.log(`Error on DB Connection:${error}`);

db.once("open", hadleOpen);
db.on("error", handleError);




// export const videoArray = [
//     {
//         id: 324393,
//         title: "Video awesome",
//         description: "This is something I love",
//         views: 24,
//         videoFile: "https://archive.org/details/BigBuckBunny_124",
//         creator: {
//             id: 121234,
//             name: "Ted",
//             email: "tedock@gmail.com"
//         }
//     },
//     {
//         id: 1222211,
//         title: "Video super",
//         description: "This is something I love",
//         views: 24,
//         videoFile: "https://archive.org/details/BigBuckBunny_124",
//         creator: {
//             id: 121234,
//             name: "Ted",
//             email: "tedock@gmail.com"
//         }
//     },
//     {
//         id: 545532,
//         title: "Video Fuck",
//         description: "This is something I love",
//         views: 24,
//         videoFile: "https://archive.org/details/BigBuckBunny_124",
//         creator: {
//             id: 121234,
//             name: "Ted",
//             email: "tedock@gmail.com"
//         }
//     },
//     {
//         id: 987333,
//         title: "Video Jerry",
//         description: "This is something I love",
//         views: 24,
//         videoFile: "https://archive.org/details/BigBuckBunny_124",
//         creator: {
//             id: 121234,
//             name: "Ted",
//             email: "tedock@gmail.com"
//         }
//     }
// ];