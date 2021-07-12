// connect the datbaase and execute the query..get the data from the databse

// import the database

var dbConn = require('../../config/db.config');

// create an object Student
var Student = function (student) {
    this.id = student.id;
    this.name = student.name;
}

// get all empoyees
Student.getAllStudents = (result) =>{
  dbConn.query('SELECT * FROM student',(err,res)=>{
      if(err){
          console.log('Error while fetching students',err);
          // returns the error
          result(null,err);
      } else {
          console.log('student fetched success');
          // returns the response
          result(null,res);
      }
  })
}
// get student by id from database
Student.getId = (id,result) =>{
    dbConn.query('SELECT * FROM student WHERE id=?',id,(err,res)=>{
        if(err){
            console.log("error",err);
            result(null,err)
        } else{
            result(null,res);
        }
    })
}

// crete employee
Student.createStudent = (studentReqData,result) => {
    dbConn.query('INSERT INTO student SET ?',studentReqData,(err,res) => {
        if (err){
            console.log('error while inserting',err);
            result(null,err);
        } else {
            console.log('created successfully');
            result(null,res);
        }
    })
}

//update student
Student.updateStudent = (id,studentReqData,result)=> {
    dbConn.query('UPDATE student SET name=? WHERE id=?',[studentReqData.name,id], (err,res)=>{
        if(err){
            console.log("error while updating");
            result(null,err)
        }else{
            result(null,res);
        }
    });
}

//delete student
Student.deleteStudent = (id,result) => {
    dbConn.query('DELETE FROM student WHERE id=?',[id],(err,res)=>{
        if(err){
            console.log("deleting a employee");
            result(null,err);
        }else{
            result(null,res);
        }

    })
}

// export the model
module.exports = Student;