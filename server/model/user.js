let {Schema,model}=require('mongoose')

let userSchema=new Schema({
    username:String,
    email:String,
    password:String,
    profilePic:String,
    profile:[
        {
            type:Schema.Types.ObjectId,
            ref:'profile'
        }
    ],
    taskAll:[
        {
            type:Schema.Types.ObjectId,
            ref:'task'
        }
    ],
    completedTask:[
        {
            type:Schema.Types.ObjectId,
            ref:'task'
        }
    ],
    deletedTask:[
        {
            type:Schema.Types.ObjectId,
            ref:'task'
        }
    ],
    important:[
        {
            type:Schema.Types.ObjectId,
            ref:'task'
        }
    ]
},{timestamps:true})

let User=model('user',userSchema)
module.exports=User