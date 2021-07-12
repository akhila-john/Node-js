const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();


//setup server port
const port = process.env.PORT || 8081;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({
    extended: false
  }));

// parse request data content type application/json
app.use(bodyParser.json());


// define root route
app.get('/',(req, res)=>{
     res.send('hello crud');
});
// import employee routes
const studentRoutes = require('./src/routes/route');

// cretae a url routes
app.use('/api/v1/student',studentRoutes);

// port listen
app.listen(port,()=>{
    console.log('express is server running at ${port}');
});