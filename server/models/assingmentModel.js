const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AssingmentSchema = new Schema({
    name: {type: String, required: true},
    dueDate: {type: Date, required: true },
    file: {type: String, required: true},
    tutor: {type: Schema.Types.ObjectId, required: true},
    course: {type: Schema.Types.ObjectId, required: true},
    score: {type: Number, required: true}
})


module.exports = mongoose.model('Assingment', AssingmentSchema)