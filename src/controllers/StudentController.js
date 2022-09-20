const StudentModel = require("../models/StudentModel");

exports.createStudent = (req, res) => {
    StudentModel.create(req.body, (err, data) => {
        if (err) {
            res.status(401).json({
                message: "Student data cant be inserted",
                data: err,
            });
        } else {
            res.status(200).json({
                message: "Student data inserted",
                data: data,
            });
        }
    });
};

exports.selectStudent = (req, res) => {
    StudentModel.find({}, (err, data) => {
        if (err) {
            res.status(401).json({
                message: "Student data cant Find",
                data: err,
            });
        } else {
            res.status(200).json({
                message: "Student data successfully Find",
                data: data,
            });
        }
    });
};

exports.selectStudentById = (req, res) => {
    StudentModel.find({ _id: req.body.id }, (err, data) => {
        if (err) {
            res.status(401).json({
                message: "Student data cant Find",
                data: err,
            });
        } else {
            res.status(200).json({
                message: "Student data successfully Find by Id",
                data: data,
            });
        }
    });
};

exports.updateStudentById = (req, res) => {
    const updatedData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        class: req.body.class,
        mobile: req.body.mobile,
    };

    StudentModel.findByIdAndUpdate(req.body.id, updatedData, (err, data) => {
        if (err) {
            res.status(401).json({
                message: "Student data cant be Updated",
                data: err,
            });
        } else {
            res.status(200).json({
                message: "Student data successfully updated",
                data: data,
            });
        }
    });
};

exports.deleteStudentById = (req, res) => {
    StudentModel.findByIdAndUpdate(req.body.id, (err, data) => {
        if (err) {
            res.status(401).json({
                message: "Student data cant be Deleted",
                data: err,
            });
        } else {
            res.status(200).json({
                message: "Student data successfully Deleted",
                data: data,
            });
        }
    });
};
