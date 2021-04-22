let jwt=require('jsonwebtoken')

exports.authState=async (req,res,next)=>{
    let {email,pass,isAuthenticated}=req.body
    console.log(req.body);
    console.log('isAuthenticated,',isAuthenticated);
    if(isAuthenticated!=='undefined'){
        console.log('authencated middle',isAuthenticated);
        let decodex=await jwt.verify(isAuthenticated,'SECRET-KEY')
        res.status(200).json({
            msg:'Successfully,login and logged',
            color:'success',
            success:true,
            loggedInfo:decodex
        })
        
        req.user=decodex
    }else{
        req.user=''
        next()
    }
   
    
}