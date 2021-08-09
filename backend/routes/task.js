var express = require('express')
var TaskRouter = express.Router()
const Task = require('./../Models/Task')

TaskRouter.get('/', async (req, res) => {
    try {
        let Tasks = await Task.find();
        res.status(200).send({success: true, data: Tasks})
    } catch (error) {
        res.status(400).send({msg: 'Failed loading tasks...', success: false})
    }
})


TaskRouter.post('/' , async (req, res) => {
    let {Title, Description} = req.body;
    let newTask = new Task({Title, Description})    
    try {
        let SaveResp = await newTask.save()
        console.log(SaveResp)
        res.send({msg: 'New Task Created...', success: true, data: SaveResp})
    } catch (error) {
        res.status(400).send({msg: 'Failed creating new task', success: false})
    }
})

TaskRouter.put('/', async (req, res) => {
    let (_id, Title, Description, Status) = req.body._id
    if(
        _id == undefined ||
        Title == undefined ||
        Description == undefined ||
        Status == undefined
        ) {
        res.send(405).send({smg: "please provide task's id, Title, Description, Status", success: false})
    } else {
        try {
            let filter = {_id}
            update = {Title, Description, Status};
            let doc = await Task.findOneAndUpdate(filter, update);
            res.status(200).send({msg: 'Task updated successfully...', success: true})
        } catch (error) {
            res.status(200).send({msg: 'Task updated successfully...', success: false})
        }
    }
})


TaskRouter.delete('/', async (req, res) => {
    console.log('del...',req.headers)
    let _id = req.headers._id;
    if(_id == undefined) {
        res.status(405).send({success: false, msg: 'Please provide task id'})
    } else {
        try {
            let update_resp = await Task.findOneAndRemove({_id});
            res.status(405).send({success: true, msg: 'Task Deleted...', data: update_resp})
        } catch (error) {
            res.status(405).send({success: false, msg: 'Please provide task id'})
        }
    }
})
module.exports = TaskRouter;