const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Chat = new Schema(
    {
        receiver: String,
        sender: String,
        text: String,
        createdAt: {type: Date, default: Date.now }
    }
);

module.exports = mongoose.model("chat", Chat);