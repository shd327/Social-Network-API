const { User, Thought } = require("../models");
// const { Thought } = require("./thoughtController");

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
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    // Delete a user and associated apps
    deleteUser(req, res) {
        console.log(req.params.userId)
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) => {
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } }, { new: true })

            })
            .then((thought) => {
                !thought
                    ? res.status(404).json({
                        message: 'user deleted, but no thought found',
                    })
                    : res.json({ message: 'user successfully deleted' })
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })

    },
    // Add a friend
    addFriends(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendsId } },
            { runValidators: true, new: true }
        )
            .then((user) => {
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },
    // Remove a friend
    removeFriends(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendsId } },
            { runValidators: true, new: true }
        )
            .then((user) => {
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })

    },
};
