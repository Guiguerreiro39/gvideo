const router = require("express").Router();
const multer = require('multer')

// Controller functions
const { getVideo, getAllVideos, postVideo, patchVideo } = require("../controllers/videos");
const { getUser, postUser } = require("../controllers/users")

router
    .get("/videos/", getAllVideos)
    .get("/videos/:id", getVideo)
    .post("/videos/", multer().none(), postVideo)
    .patch("/videos/:id", multer().none(), patchVideo)
    .get("/users/", getUser)
    .post("/users/", multer().none(), postUser)

module.exports = router;
