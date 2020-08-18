const express = require('express');
const userRouter  =express.Router();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
userRouter.use(bodyParser.json());


const fileName = path.join(__dirname, '../models/user.json');
userRouter.route('/')
.get((req, res) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end(JSON.stringify(err));
      }
    res.setHeader('Content-Type', 'text/json');
      const fileData = data;
      res.end(fileData);
    })
  })
  .post((req, res) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end(JSON.stringify(err));
      }
      const users = req.body;
      let existingUsers = data.length > 0 ? JSON.parse(data) : [];
      existingUsers.push(users);
      fs.writeFile(fileName, JSON.stringify(existingUsers), (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.end(JSON.stringify(err));
        }
        res.end(JSON.stringify(data));
      })
    })
  })

.put((req,res)=>{

});



module.exports = userRouter;