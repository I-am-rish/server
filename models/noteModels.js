const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    text: String,
},
{versionKey: false},
)

module.exports = mongoose.model("notes", noteSchema);