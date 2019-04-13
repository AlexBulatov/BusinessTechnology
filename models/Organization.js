const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Organization = new Schema(
    {
        title: String,
        type: String, //Company or R&D
        location: String,
        contacts: String,
        description: String,
        createDate: {type: Date, default: Date.now},
        linker: String,
        tags: [String],
        inn: String,
        developments: String, //For Company
        branch: String, // For Company
        portfolio: [String],
        personnel: Number
    }
);

module.exports = mongoose.model("organizations", Organization);