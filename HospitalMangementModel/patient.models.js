const mongoose = require('mongoose')

const PatientSchema = new mongoose.Shcema({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: ture
    },
    bloodgroup: {
        type: String,
        required: true
    }
    
}, {timestapms: true})

export const Patient = mongoose.model('Patient', PatientSchema)