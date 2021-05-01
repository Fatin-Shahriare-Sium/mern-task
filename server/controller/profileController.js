let User=require('../model/user.js')
let Profile=require('../model/profile.js')
exports.checkProfileController=async (req,res,next)=>{
    let userx=await User.findOne({_id:req.user.idx}).populate({
        path:'profile'
    })
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
exports.createProfileController=async(req,res,next)=>{
   
    let {username,status,address,bio,pic}=req.body
    console.log('req.body',req.body);
    let newProfile=new Profile({
        username,
        bio,
        address,
        status,
        profilePic:pic
    })
    try{
       let profilex= await newProfile.save()
    await User.findOneAndUpdate({_id:req.user.idx},{
        $set:{profilePic:pic},
        $push:{profile:profilex._id}
    })
     res.status(200).json({
        msg:'Successfully,created new profile',
        profile:profilex
     })
    }catch{
        res.status(500).json({
            msg:'Failed to create new profile',
            profile:''
         })
    }
}

exports.updateProfileController=async(req,res,next)=>{
    let {id}=req.params
    console.log('updateprofile',req.params);
    let {username,status,address,bio,pic}=req.body
    
    try{
        await Profile.findOneAndUpdate({_id:id},{
            $set:{username,status,address,bio,pic}
        })
        await User.findOneAndUpdate({_id:req.user.idx},{
            $set:{profilePic:pic}
        })
        res.status(200).json({
            msg:'Update,Profile SuccessFully'
        })
    }catch{
        res.status(200).json({
            msg:'Failed to update profile'
        })
    }
}