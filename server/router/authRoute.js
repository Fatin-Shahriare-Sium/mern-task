let router=require('express').Router()
let {authState}=require('../middleware/authMiddleware.js')
let {signupPostController,loginGetController, getAnalticsForUser, changePassController}=require('../controller/authController.js')
router.post('/signup',signupPostController)
router.post('/login',authState,loginGetController)
router.post('/userdata',authState,getAnalticsForUser)
router.post('/changePass',authState,changePassController)
module.exports=router