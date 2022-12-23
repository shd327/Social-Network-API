const { Thought, User } = require("../models");

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))

    },
    getThoughtbyId(req, res) {

    },
    createThought(req, res) {

    },
    updateThought(req, res) {

    },
    deleteThought(req, res) {

    },
    createReaction(req, res) {

    },
    deleteReaction(req, res) {

    },
};
