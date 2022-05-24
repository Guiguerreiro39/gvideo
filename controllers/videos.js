const Videos = require("../models/videos");

const getVideo = (req, res) => {
    const id = req.params.id;

    Videos.findById(id)
        .then((payload) => {
            res.status(200).json({
                payload: payload,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({
                error: `Error while retrieving the video with id ${id}.`,
            });
        });
};

const getAllVideos = (req, res) => {
    Videos.find({})
        .then((payload) => {
            res.status(200).json({
                payload: payload,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({
                error: "Error while retrieving the videos.",
            });
        });
};

const postVideo = (req, res) => {
    Videos.create(req.body)
        .then((payload) => {
            res.status(201).json({
                payload: payload
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({
                error: "Error while creating a new video entry.",
            });
        });
}

const patchVideo = (req, res) => {
    const id = req.params.id

    Videos.findByIdAndUpdate(id, req.body, {
        useFindAndModify: false,
        new: true,
    }).then((payload) => {
        res.status(200).json({
            payload: payload
        })
    }).catch((err) => {
        console.error(err)
        res.status(400).json({
            error: `Error while updating the video with id ${id}.`
        })
    })
}

module.exports = {
    getVideo,
    getAllVideos,
    postVideo,
    patchVideo
};
