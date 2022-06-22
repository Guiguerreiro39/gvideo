const Users = require("../models/users");

const getUser = (req, res) => {
    const {username, password} = req.query

    Users.findOne({username, password})
        .then((payload) => {
            res.status(200).json({
                payload: payload,
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({
                error: `Error while retrieving the user with id ${id}.`,
            });
        });
};

const postUser = (req, res) => {
    Users.create(req.body)
        .then((payload) => {
            res.status(201).json({
                payload: payload
            })
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({
                error: "Error while creating a new user entry.",
            });
        });
}

module.exports = {
    getUser,
    postUser
};
