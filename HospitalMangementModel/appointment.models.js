const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Shcema({
    doctor: {
        type: mongoose.Shcema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    patient: {
        type: mongoose.Shcema.Types.ObjectId,
        ref: "Patient",
        required: true
    },

    status: {
      type: String,
      enum: ["Pending", "Completed", "Cancelled"],
      default: "Pending"
    }
}, {timestapms: true})

export const Appointment = mongoose.model("Appointment", appointmentSchema)