let User=require('../model/user.js')
let bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')
exports.signupPostController=async (req,res,next)=>{
    let {username,email,password}=req.body
    console.log(req.body);
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
    try{
        let exUser=await User.find({email:email})
        if(exUser.length>0){
            
            res.status(200).json({
                msg:'Already,created account with this email',
                color:'warning'
            })
        }else{
            
       
        let userx=await newUser.save()
        console.log('login');
        res.status(200).json({
           msg:'Successfully,created account',
           color:'success'
        })
        let idx=userx._id
        let token= await jwt.sign({email,idx,username},'SECRET-KEY')
        // res.cookie('__task77573w82',token)
        }
        
    }catch{
        res.status(404).json({
            msg:'Failed to create user',
            color:'danger'
        })
    }
 
}

exports.lo