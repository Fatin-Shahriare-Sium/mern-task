
exports.createTaskPostController=(req,res,next)=>{
    console.log(req.body);
    res.json({
        'myCreator':'Allah is Almighty'
    })
}