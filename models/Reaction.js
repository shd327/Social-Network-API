const { Schema, Types } = require('mongoose');

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
            default: () => new Date().getDate(),
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