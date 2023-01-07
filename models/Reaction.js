const { Schema, Types } = require('mongoose');
const date = require("../utils/date");
const reactionSchema = new Schema(
    {
        reactionId: {

            type: Schema.Types.ObjectId,
            default: () => {
                return new Types.ObjectId()
            }

        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: () => Date.now(),
            get: (time) => date(time),
            // get: (time) =>  Date("<YYYY-mm-dd>")
        },

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

// TODO: Use a getter method to format the timestamp on query
module.exports = reactionSchema;