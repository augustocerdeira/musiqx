const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Username name is required"],
        },
        
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be 8 characters or longer"],
        },

        friends: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema',
            friendmessage: [String]
        }],

        message: [],
        // {
        //     type: Array,
        // },

        location: {
            type: String,
            required: [true, "Location is required"],
        },

        usertype: {
            type: String,
            required: [true, "Type is required"],
        },

        photo: {
            type: String
        },

        banner: {
            type: String
        },

        track1: {
            type: String
        },

        track2: {
            type: String
        },

        track3: {
            type: String
        },

        sc: {
            type: String
        },

        // image:  {
        //     data: Buffer,
        //     contentType: String
        // },
    },
    { timestamps: true },
);

UserSchema.virtual("confirm")
    .get(() => this._confirm)
    .set((value) => (this._confirm = value));

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirm) {
        this.invalidate("confirm", "Password must match confirm password");
    }
    next();
});

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;