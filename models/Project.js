let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Project = new Schema(
    {
        title: String,
        stakeholder: {
                title: String,
                orgtype: String
        },
        description: String,
        techtask: String,
        budget: Number,
        isShadow: Boolean,
        isPromote: Boolean
    }
);

module.exports = mongoose.model('projects', Project);