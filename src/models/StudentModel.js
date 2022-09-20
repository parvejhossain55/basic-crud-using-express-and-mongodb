const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
    {
        studentId: { type: Number, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        gender: {
            type: String,
            enum: ["Male", "Female", "Others"],
            required: true,
        },
        dob: { type: Date, default: Date.now },
        class: { type: Number, required: true, min: 1, max: 12 },
        mobile: {
            type: String,
            validate: {
                validator: (value) => {
                    if (
                        value.match(
                            /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/
                        )
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                },
            },
            required: true,
        },
    },
    { versionKey: false }
);

let StudentModel = mongoose.model("students", StudentSchema);

module.exports = StudentModel;
