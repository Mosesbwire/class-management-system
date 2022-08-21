const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 8

const Schema = mongoose.Schema

const TutorSchema = new Schema(
    {
        first_name: {type: String, maxLength: 100, required: true},
        last_name: {type: String, maxLength: 100, required: true},
        email: {type: String, maxLength: 100, required: true, unique: true},
        password: {type: String, required: true}
    }
);

TutorSchema.virtual('name')
.get(function(){
    let fullName = ''

    if(this.first_name && this.last_name){
        fullName = `${this.first_name} ${this.last_name}`
    }else {
        fullName = ''
    }

    return fullName
})

TutorSchema.methods.generateHash = async function(password){
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

TutorSchema.methods.validPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('Tutor', TutorSchema)