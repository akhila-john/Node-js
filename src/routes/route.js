const express = require('express');
const router = express.Router();

// import the controller
const Controller = require('../controller/controller');

// route to retreive the empoyee list
router.get('/',Controller.getStudentList);

router.get('/:id',Controller.getStudentById);

router.post('/',Controller.createStudent);

router.put('/:id',Controller.updateStudent);

router.delete('/:id',Controller.deleteStudent);

// made vailable outside this file
module.exports = router;