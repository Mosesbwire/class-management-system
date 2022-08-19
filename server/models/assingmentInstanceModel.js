const mongoose = require('mongoose')
const Schema = mongoose.Schema


AssingmentInstanceSchema = new Schema({
    assingment: {type: Schema.Types.ObjectId, ref: 'Assingment', required: true},
    student: {type: Schema.Types.ObjectId, ref: 'Student', required: true},
    score: {type: Number, default: 0},
    fileName: {type: String, required: true},
    isOverDue: {type: Boolean, default: false}
})


AssingmentInstanceSchema.virtual('url')
.get(function(){
    return `assingment/submissions/${this._id}`
})


module.exports = mongoose.model('AssingmentInstance', AssingmentInstanceSchema)