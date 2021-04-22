let router=require('express').Router()
let {authState}=require('../middleware/authMiddleware.js')
let {signupPostController,loginGetController}=require('../controller/authController.js')
router.post('/signup',signupPostController)
router.post('/login',authState,loginGetController)
module.exports=router