const { createTaskPostController, getTaskController } = require('../controller/taskController')
const { authState } = require('../middleware/authMiddleware')

let router=require('express').Router()

router.post('/create',authState,createTaskPostController)
router.post('/',authState,getTaskController)
module.exports=router