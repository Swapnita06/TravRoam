const express = require ('express');
const app = express();
const cors = require ("cors");
require ('./db/config');
const Task = require("./db/Todo")

app.use(express.json()); 
app.use(cors());

app.get('/task', async(req,resp)=>{
    const tasks = await Task.find();
    resp.json(tasks);
})


app.post('/add', async(req,resp)=>{
    const task = new Task(req.body);
    let result= await task.save(); // Save the user in the database (kitchen)
    result = result.toObject();
    resp.send(result);
})

app.delete("/delete/:taskId", async(req,resp)=>{
    const taskId = req.params.taskId;
    
       const result = await Task.deleteOne({ _id: taskId });
       resp.send(result);
    
    
 })
 
 app.put("/update/:taskId",async(req,resp)=>{
    const taskId = req.params.taskId;
    const task = req.body;
    const result = await Task.findByIdAndUpdate(taskId, task, {new:true});
    resp.send(result);
 })
 app.listen(5000);