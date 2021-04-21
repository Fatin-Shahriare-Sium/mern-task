let router=require('express').Router()
let {signupPostController}=require('../controller/authController.js')
router.post('/signup',signupPostController)
module.exports=router