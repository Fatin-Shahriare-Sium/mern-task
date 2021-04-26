const { createTaskPostController, getTaskController, getSingleTaskController, editTaskController } = require('../controller/taskController')
const { authState } = require('../middleware/authMiddleware')

let router=require('express').Router()

router.post('/create',authState,createTaskPostController)
router.post('/',authState,getTaskController)
router.post('/update/:id',editTaskController)
router.get('/:id',getSingleTaskController)
module.exports=router