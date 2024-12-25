const db = require("../config/db")

const getAllStudent = async () => {
    const [rows] = await db.query("select * from siswa")
    return rows
}

const getStudentById = async (id) => {
    const[row] =  await db.query("select * from siswa where id=?",id)
    return row
}

const addStudent = async (student) => {
    const {name,email,phone} = student
    const [result] = await db.query('insert into siswa(name,email,phone) values(?,?,?)',[name,email,phone])
    return result.insertId;
}

module.exports = {getAllStudent, getStudentById, addStudent}
