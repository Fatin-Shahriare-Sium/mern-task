//হাসবুনাল্লাহু ওয়া নিমাল ওয়াকিল
let router=require('express').Router()
const { checkProfileController,createProfileController, updateProfileController } = require('../controller/profileController')
const { authState } = require('../middleware/authMiddleware')

router.post('/check',authState,checkProfileController)
router.post('/create',authState,createProfileController)
router.post('/update/:id',authState,updateProfileController)
module.exports=router