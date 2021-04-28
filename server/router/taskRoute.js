const { createTaskPostController, getTaskController, getSingleTaskController, editTaskController, setCompleteController, setImportantController, deleteTaskController } = require('../controller/taskController')
const { authState } = require('../middleware/authMiddleware')

let router=require('express').Router()

router.post('/create',authState,createTaskPostController)
router.post('/',authState,getTaskController)
router.post('/update/:id',editTaskController)
router.post('/complete/:id',authState,setCompleteController)
router.post('/important/:id',authState,setImportantController)
router.post('/delete/:id',authState,deleteTaskController)
router.get('/:id',getSingleTaskController)
module.exports=router