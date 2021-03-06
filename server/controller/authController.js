let User=require('../model/user.js')
let bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')
exports.signupPostController=async (req,res,next)=>{
    let {username,email,password}=req.body
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
                color:'warning',
                success:false
            })
        }else{
        let userx=await newUser.save()

        let idx=userx._id
        let pic=userx.profilePic
        let token= await jwt.sign({email,idx,username,pic},'SECRET-KEY')
        res.cookie('__task77573w82',token)
        res.status(200).json({
            msg:'Successfully,created account',
            color:'success',
            loggedInfo:{email,idx,username,pic},
            success:true
         })
        }
        
    }catch{
        res.status(404).json({
            msg:'Failed to create user',
            color:'danger',
            success:false
        })
    }
 
}

exports.loginGetController=async (req,res,next)=>{
    let {email,pass}=req.body
   
    try{
            matchPass(req,res,User,email,pass,bcrypt)
          
    }catch (err){
        res.status(404).json({
            msg:'Failed to login',
            color:'danger',
            success:false,
            alreadyLogged:false,
        })
    }
}

exports.getAnalticsForUser=async (req,res,next)=>{
    let userx=await User.findOne({_id:req.user.idx})
    try{
        res.status(200).json({
            user:userx
        })
    }catch{
        res.status(200).json({
            user:'Network error'
        })
    }
}

exports.changePassController=async(req,res,next)=>{
    let {old,newpass}=req.body
    let userx=await User.findOne({_id:req.user.idx})
    try{
        let match=await bcrypt.compare(old,userx.password)
        console.log('match',match);
        if(match){  
            let hased=await bcrypt.hash(newpass,10)
            let user=await User.findOneAndUpdate({_id:req.user.idx},{
                $set:{password:hased}
            })
            res.status(200).json({
                msg:'Successfully,updated your password',
                color:'success'
            })
        }else{
            res.status(200).json({
                msg:'Your old password is not matching',
                color:'warning'
            })
        }
       
    }catch{

    }
    
    
   
    
}

async function matchPass(req,res,User,email,pass,bcrypt){
    if(req.user){
        let user=await User.findOne({_id:req.user.idx})
        console.log('onfo passed to auth controller',req.user);
        res.status(200).json({
            msg:'Successfully,login and passed middleware',
            color:'success',
            success:true,
            loggedInfo:user,
            alreadyLogged:true
        })
    }else{
        
        let userForLogin=await User.findOne({email:email})
                console.log('userForLogin',userForLogin);
                let matchPass=userForLogin?await bcrypt.compare(pass,userForLogin.password):false
                
                if(matchPass){
                    
                    let username=userForLogin.username
                    let idx=userForLogin._id
                    let pic=userForLogin.profilePic
                    let tokenx=await jwt.sign({email,username,idx,pic},'SECRET-KEY')
                    
                    
                    res.status(200).json({
                    msg:'Successfully,login',
                    color:'success',
                    success:true,
                    loggedInfo:{email,idx,username,pic},
                    alreadyLogged:false,
                    tokenx
                    })
                        
                   
        
                }else{
                    res.status(200).json({
                        msg:'Invalid email or password',
                        color:'warning',
                        success:false,
                        alreadyLogged:false,
                    })
                }
    }
    
    
            
}