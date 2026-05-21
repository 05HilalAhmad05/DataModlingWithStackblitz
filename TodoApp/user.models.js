const mongoose = require('mongoose')

const UserSchema = new mongoose.Shema({
    name:{
        type: String,
        required: ture
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    }
}, {timestapms: true})

export const  User = mongoose.model('User', UserSchema)