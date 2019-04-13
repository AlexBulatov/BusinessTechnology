const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema(
    {
        title: String,
        stakeholder: String,
        description: String,
        techtask: String,
        budget: Number,
        isShadow: Boolean,
        isPromote: Boolean
    }
);

module.exports = mongoose.model("projects", Project);