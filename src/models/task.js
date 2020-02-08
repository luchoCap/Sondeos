const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema de tasks
const newS = new Schema({
    title: { type: String, required: true },

});


module.exports = mongoose.model('Task', newS)