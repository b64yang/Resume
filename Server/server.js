const express = require('express');
const path = require('path');
const axios = require('axios');
const cors        = require('cors');
const fs = require('fs')

var app = express()

app.use(cors({origin: '*'}));

app.get('/download/resume',function(req,res){
    const resume = path.join(__dirname, '/ResumeBowen.pdf')
    //const resume = fs.readFileSync(__dirname + '/ResumeBowen.pdf')
    // res.send(resume);
    res.download(resume)
    //res.pipe(__dirname + '/ResumeBowen.pdf')

});

  // handler for the /user/:id path, which prints the user ID
//   app.get('/user/:id', function (req, res, next) {
//     res.end(req.params.id)
//   })

app.listen(3000, () => {
    console.log("server started");
});