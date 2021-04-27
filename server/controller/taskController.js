let Task=require('../model/task.js')
let User=require('../model/user.js')
exports.createTaskPostController=async (req,res,next)=>{
    let {title,des,start,end}=req.body
    let task=new Task({
        title,
        des,
        startD:start,
        endD:end,
        complete:false,
        important:false,
        user:req.user.idx
    })
   try{
    let newTask=await task.save()
   
    await User.findOneAndUpdate({_id:req.user.idx},{
        $push:{taskAll:newTask._id}
    })
    res.status(200).json({
        msg:'Successfully,created a new Task',
        color:'success',
        success:true
    })
   }catch{
    res.status(200).json({
        msg:'Failed to create a new Task',
        color:'danger',
        success:false
    })
   }
   
}

exports.getTaskController=async (req,res,next)=>{
    let allTask=await User.findOne({_id:req.user.idx}).populate({
        path:'taskAll'
    })
    try{
        res.status(200).json({
            all:allTask.taskAll
        })
    }catch{

    }
   
}
exports.getSingleTaskController=async(req,res,next)=>{
    let {id}=req.params
    let task=await Task.findOne({_id:id})
    try{
        res.status(200).json({
            task:task
        })
    }catch{
        res.status(404).json({
            task:fasle
        })
    }
}

exports.editTaskController=async (req,res,next)=>{
    let {id}=req.params
    let {title,des,start,end,complete,important}=req.body
    try{
        await Task.findOneAndUpdate({_id:id},{
            $set:{
                title,
                des,
                startD:start,
                endD:end,
                complete,
                important
            }
        })
        res.json({
            msg:'Successfully,updated',
            color:'success',
            success:true
        })
    }catch{
        res.json({
            msg:'Failed to update',
            color:'danger',
            success:false
        })
    }
}

exports.setCompleteController=async (req,res,next)=>{
    let {id}=req.params
    let {complete}=req.body
    console.log('req.body in complete controller',req.body);
    await Task.findOneAndUpdate({_id:id},{
        $set:{complete:complete}
    })
    let uptask=await Task.findOne({_id:id})
    try{
        res.json({
            msg:uptask.complete?'Congratulations,you have completed your task':'You have not completed your task',
            color:uptask.complete?'success':'warning',
            success:true,
            newTask:uptask
    })
    }catch{

    }
}

exports.setImportantController=async (req,res,next)=>{
    let {id}=req.params
    let {important}=req.body
    await Task.findOneAndUpdate({_id:id},{
        $set:{important:important}
    })
    let uptask=await Task.findOne({_id:id})
    try{
        res.json({
            msg:uptask.important?'Congratulations,you have selected your task as important one':'It is not your important task,anymore',
            color:uptask.important?'success':'warning',
            success:true,
            newTask:uptask
    })
    }catch{

    }
}

exports.deleteTaskController=async (req,res,next)=>{
    let {id}=req.params
    await Task.findOneAndDelete({_id:id})
    try{
        res.json({
            msg:'Done,you have deleted your task',
            color:'success',
            success:true,
            
    })
    }catch{
        res.json({
            msg:'Network error,unable to delete',
            color:'warning',
            success:true,
            
    })
    }
}