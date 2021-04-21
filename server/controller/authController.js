let User=require('../model/user.js')
let bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')
exports.signupPostController=async (req,res,next)=>{
    let {username,email,password}=req.body
    console.log(req);
    try{
        let hased=await bcrypt.hash(password,11)
        let newUser=new User({
            username,
            email,
            password:hased,
            profilePic:'https://www.svgrepo.com/show/148911/manager-avatar.svg',
            taskAll:[],
            completedTask:[],
            deletedTask:[],
            important:[]

        })
        // let userx=await newUser.save()
        res.status(200).json({
            user:username
        })
    //     let idx=userx._id
    //    let token= await jwt.sign({email,idx,username},'SECRET-KEY')
    //    res.cookie('__task77573w82',token)
    }catch{
        res.status(404).json({
            messag:'Problem'
        })
    }
 
}

exports.lo