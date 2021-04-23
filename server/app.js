let express=require('express')
let mongoose =require('mongoose')
let authRouter=require('./router/authRoute.js')
let taskRouter=require('./router/taskRoute.js')
let cookieparser=require('cookie-parser')
//cd backend/task-maneger
let app=express()
mongoose.connect(`mongodb+srv://adminx:7m7YnJ6looCJIFP5@taskmanager.xxfr5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('mongodb connected successfully');
})
let middleware=[
    express.urlencoded({extended:true}),
    express.json(),
    cookieparser()
]
app.use(middleware)
app.use('/auth',authRouter)
app.use('/task',taskRouter)
app.get('/',(req,res)=>{
    res.json('Allah is Almighty')
})
app.listen('5000',()=>{
    console.log('Server is running,Alhamdulillah');
})