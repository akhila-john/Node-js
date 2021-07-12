
const StudentModel = require('../models/model');

// get employee list

exports.getStudentList = (req, res)=> {
    //console.log("all student list!!");
    StudentModel.getAllStudents((err, student) =>{
        console.log('we are here');
        if(err)
            // send the response err
            res.send(err);
            console.log('students:',student)
            res.send(student)
        
    })
}
// get employee by id..create a function
exports.getStudentById = (req,res)=>{
    //console.log('get by id');
    //req.params.id--returns the id passed as the query param
    StudentModel.getId(req.params.id,(err,student)=>{
        if(err)
        res.send(err);
        console.log('student:',student)
        res.send(student);
    })
}

// crete new student
exports.createStudent = (req,res)=> {
    // req.body has the new body data
//console.log('request data:',req.body);
    //passing req.body in the Student object
    const studentReqData = new StudentModel(req.body);
    console.log('request data:',studentReqData);
    // check null
    if(req.body.constructor ===Object && Object(req.body).length === 0){
        res.send(400).send({success:false,message:'please fill all fields'})
    }else{
        console.log('vallid data');
        
        StudentModel.createStudent(studentReqData,(err,student)=>{
            if(err)
                res.send(err);
                res.json({status:true,message:'creted student data',data: student})
                //res.send(student);
                
        })
    }
}

//update student
exports.updateStudent = (req,res) =>{
    
    const studentReqData = new StudentModel(req.body);
    console.log('request data update:',studentReqData);
    // check null
    if(req.body.constructor ===Object && Object(req.body).length === 0){
        res.send(400).send({success:false,message:'please fill all fields'})
    }else{
        console.log('vallid data');
        
        StudentModel.updateStudent(req.params.id,studentReqData,(err,student)=>{
            if(err)
                res.send(err);
                res.json({status:true,message:'updated student data',data: student})
                //res.send(student);
                
        })
    }
}

exports.deleteStudent = (req,res) => {
    StudentModel.deleteStudent(req.params.id, (err,student) => {
        if(err)
        res.send(err);
        res.json({success:true,message: 'deleted success'})
    })
}