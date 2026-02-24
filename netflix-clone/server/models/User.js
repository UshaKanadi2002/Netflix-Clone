const User = require("./models/User");

const mongoose= require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: rue,
    },
    profilePic: {
        type: String,
        default: "",
    },
}, {timestamps: true});

module.exports = mongoose.model("Users", UserSchema);