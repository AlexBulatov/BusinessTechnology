const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        login: String,
        password: String,
        name: String,
        surname: String,
        secondname: String,
        email: String,
        telephone: String,
        org: String
    }
);

module.exports = mongoose.model("users", User);