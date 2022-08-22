const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 8

const Schema = mongoose.Schema

const StudentSchema = new Schema({

    firstName: {type: String, minLength: 1, maxLength: 100, required: true},
    lastName: {type: String, minLength: 1, maxLength: 100, required: true},
    email: {type: String, minLength: 4, maxLength: 100, required: true, unique: true},
    password: {type: String, minLength: 6, maxLength: 100, required: true},
    classes: {type: Map, of: Schema.Types.ObjectId}
})

StudentSchema.virtual('name')
.get(function(){
    let fullName = ''

    if(this.firstName && this.lastName){
        fullName = `${this.firstName} ${this.lastName}`
    }else {
        fullName = ''
    }

    return fullName
})
StudentSchema.virtual('url')
.get(function(){
    
    return `/student/${this._id}`
})


StudentSchema.methods.generateHash = async function(password){
    
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

StudentSchema.methods.validPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('Student', StudentSchema)