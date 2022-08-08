const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TutorSchema = new Schema(
    {
        first_name: {type: String, maxLength: 100, required: true},
        last_name: {type: String, maxLength: 100, required: true},
        e_mail_address: {type: String, maxLength: 100, required: true, unique: true},
        password: {type: String}
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




module.exports = mongoose.model('Tutor', TutorSchema)