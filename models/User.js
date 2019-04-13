const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        login: String,
        password: String,
        nails: Boolean
    }
);

module.exports = mongoose.model("users", User);