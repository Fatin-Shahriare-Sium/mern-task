//হাসবুনাল্লাহু ওয়া নিমাল ওয়াকিল
let router=require('express').Router()
const { checkProfileController } = require('../controller/profileController')
const { authState } = require('../middleware/authMiddleware')

router.post('/check',authState,checkProfileController)

module.exports=router