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
    let allTask=await User.findOne({email:'fahimshahriares@gmail.com'}).populate({
        path:'taskAll'
    })
    try{
        res.status(200).json({
            all:allTask.taskAll
        })
    }catch{

    }
    console.log('allTask',allTask);
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