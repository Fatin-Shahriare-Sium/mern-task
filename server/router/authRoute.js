let router=require('express').Router()
let {authState}=require('../middleware/authMiddleware.js')
let {signupPostController,loginGetController, getAnalticsForUser}=require('../controller/authController.js')
router.post('/signup',signupPostController)
router.post('/login',authState,loginGetController)
router.post('/userdata',authState,getAnalticsForUser)
module.exports=router