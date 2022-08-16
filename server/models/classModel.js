const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ClassSchema = new Schema({
    tutor: {type: Schema.Types.ObjectId, ref: 'Tutor', required: true},
    name: {type: String, required: true},
    totalHours: {type: Number, required: true},
    totalNumberOfTopics: {type: Number, required: true},
    inSession: {type: Boolean, required: true, default: true}
})

ClassSchema.virtual('url')
.get(function(){
    return `/class/${this._id}`
})



module.exports = mongoose.model('Class', ClassSchema)