const mongoose = require('mongoose');
const express = require('express');
const https = require('https');
const path = require('path');
const ServiceTask = require('./models/Tasks.js');
const cors = require('cors');

const app = express();

mongoose.connect("mongodb://localhost:27017/iServiceDB", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.get('/', (req, res)=>{
    
})

app.post('/posttask', (req, res)=>{
    const task = new ServiceTask({
        task_type: req.body.task_type,
        task_title: req.body.taskTitle,
        task_description: req.body.taskDescription,
        task_suburb: req.body.taskSuburb,
        task_date: req.body.taskDate,
        task_budget: req.body.price,
        task_price: req.body.taskPrice
    });
    task.save()
    .catch((err) => console.log(err));
    res.json(('saved to db: ' + task));
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, (req,res)=>{
    console.log("Server is running successfully on port " + port);
});