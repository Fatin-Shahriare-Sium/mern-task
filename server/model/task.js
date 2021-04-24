let {Schema,model}=require('mongoose')

let taskSchema=new Schema({
    title:String,
    des:String,
    startD:String,
    endD:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    
},{timestamps:true})

let Task=model('task',taskSchema)
module.exports=Task