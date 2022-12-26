const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require("moment");
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
            get: (time) => moment(time).format("MM/DD/YYYY"),
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