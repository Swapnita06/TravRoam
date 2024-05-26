const mongoose = require ('mongoose');
const todoSchema = new mongoose.Schema({
    task:String,
    note:String
})

module.exports = mongoose.model('Task',todoSchema);