const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const date = require("../utils/date");
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (time) => date(time),
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            reactionSchema
        ],

    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },

    }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length

})
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;