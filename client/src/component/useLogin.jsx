const { useState } = require("react");

let useLogin=()=>{
    let[error,setError]=useState({})
    let[open,setOpen]=useState(false)

    let handleLogin=(e)=>{
        e.preventDefault()
        let email=e.target[0].value
        let pass=e.target[1].value
        setError({
            email:email?'':'Please,give your email',
            pass:pass?'':'Please,give your password'
        })
        if(email && pass){
            console.log('given two');
            fetch('/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email,
                    pass
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
                setError({
                    msg:data.msg,
                    color:data.color
                })
                if(data.success){
                    e.target.reset()
                }
            })
        }
    }
    let showPassword=(e)=>{
       let passx=document.getElementById('password')
        if(open){
            passx.type='password'
            setOpen(false)
        }else{
            passx.type='text'
            setOpen(true)
        }
    }
    return {showPassword,handleLogin,open,error}
}
export default useLogin;