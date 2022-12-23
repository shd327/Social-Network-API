const { User, Thought } = require("../models");

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))

    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            ).catch((err) => {
                res.status(500).json(err);
            })
    },
    // update a user
    updateUser(req, res) {

    },
    // create a new user
    createUser(req, res) {

    },
    // Delete a user and associated apps
    deleteUser(req, res) {

    },
    // Add a friend
    addFriends(req, res) {

    },
    // Remove a friend
    removeFriends(req, res) {

    },
};
