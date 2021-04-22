let router=require('express').Router()
let {signupPostController,loginGetController}=require('../controller/authController.js')
router.post('/signup',signupPostController)
router.post('/login',loginGetController)
module.exports=router