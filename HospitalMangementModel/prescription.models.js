const mongoose = require('mongoose')

const prescriptionSchema = new mongoose.Shcema({
    appointment: {
        type: mongoose.Shcema.Types.ObjectId,
        ref: "Appointment",
        required: true
    }, 
    medicine: {
        type: String,
        naem: String,
        dosage: String

    }
}, )

export const Prescription = mongoose.model("Prescription", prescriptionSchema)