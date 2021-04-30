let User=require('../model/user.js')
exports.checkProfileController=async (req,res,next)=>{
    let userx=await User.findOne({_id:req.user.idx})
    if(userx.profile.length==0){
        res.status(200).json({
            text:'Create Your Profile',
            user:userx
        })
    }else{
        res.status(200).json({
            text:'Update Your Profile',
            user:userx
        })
    }
}