const {
    createStudent,
    selectStudent,
    selectStudentById,
    updateStudentById,
    deleteStudentById,
} = require("../controllers/StudentController");
const { StudentDataValidate } = require("../middlewares/StudentDataValidator");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("This is Home Page");
});

router.post("/addstudent", StudentDataValidate, createStudent);
router.get("/selectallstudent", selectStudent);
router.get("/selectstudentbyid", selectStudentById);
router.put("/updatestudentbyid", StudentDataValidate, updateStudentById);
router.delete("/deletestudentbyid", deleteStudentById);

// default error handler
router.get("*", (req, res) => {
    res.status(404).send("Page Not Found");
});

module.exports = router;
