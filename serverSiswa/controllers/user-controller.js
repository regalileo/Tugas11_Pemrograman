const userModel = require("../models/user-model")

const getAllStudent = async (req,res) => {
    try{
        const student =
        await userModel.getAllStudent()
        if(!student) res.json({message:'Student Not Found'})
            res.json(student)
    }
    catch(error){
        console.log(error);
        req.json({message:'Error Get All Student'})
    }

}
const getStudentById = async (req,res) => {
    try{
        const student = 
        await userModel.getStudentById(req.params.id)
        if(student.length > 0){
            res.status(200).json({message: 'Sukses', student})
        }
        else{
            res.status(500).json({message:'Student Not Found'})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'Error Get Student'})
    }
}
const addStudent =async (req,res) => {
    try {
        const newStudent = await userModel.addStudent(req.body)
        res.status(200).json({id:newStudent,...req.body})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error Insert Student'})
    }  
}

module.exports ={getAllStudent, getStudentById, addStudent}