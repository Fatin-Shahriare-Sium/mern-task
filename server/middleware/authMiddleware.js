let jwt=require('jsonwebtoken')

exports.authState=async (req,res,next)=>{
    let {isAuthenticated,haveCookie}=req.body
    console.log('req body auth middle',req.body);
    console.log('isAuthenticated,',isAuthenticated);
    if(haveCookie){
        console.log('authencated middle',isAuthenticated);
        let decodex=await jwt.verify(isAuthenticated,'SECRET-KEY')
        req.user=decodex
        
    }else{
        
    }
   
    next()
}