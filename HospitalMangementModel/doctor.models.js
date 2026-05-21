const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true,
        unique: true
     },
     specialization: {
        type: String,
        required: true

     },
     exprience: {
        type: Number,
        required: Boolean
     },
     availibility: {
        type: String,
        default: true
     }
}, {timestaps: true})

export const Doctor = mongoose.model("Doctor", DoctorSchema)