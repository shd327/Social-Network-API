const { Schema, model } = require('mongoose');

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,

        },
        email: {
            type: String,
            Required: true,
            Unique: true,
            Required: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            // match: /.+\@.+\..+/,
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "Thought"

        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],

    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },

    }
);
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
