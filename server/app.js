let express=require('express')
let mongoose =require('mongoose')
//cd backend/task-maneger
let app=express()
mongoose.connect(`mongodb+srv://adminx:7m7YnJ6looCJIFP5@taskmanager.xxfr5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('mongodb connected successfully');
})
app.use(
    express.urlencoded({extended:true}),
)
app.get('/',(req,res)=>{
    res.json('Allah is Almighty')
})
app.listen('5000',()=>{
    console.log('Server is running,Alhamdulillah');
})