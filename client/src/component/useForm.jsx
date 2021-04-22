const { useState } = require("react");

let useForm=()=>{
    let[open,setOpen]=useState(false)
    let[open2,setOpen2]=useState(false)
    let[error,setError]=useState({})
    let handleSubmit=(e)=>{
        let url='http://localhost:5000'
        e.preventDefault()
        let username=e.target[0].value
        let email=e.target[1].value
        let password=e.target[2].value
        let Conpassword=e.target[3].value
        setError({
            username:username?'':'Give Your Name',
            email:email?'':'Give Your Email',
            password:password?'':'Please,give password',
            color:password?'success':'danger',
            msg:''
        })
        if(password===Conpassword && username && email && password){
            fetch(`/auth/signup`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username,email,password,Conpassword
                })
            }).then(res=>res.json())
            .then(data=>{
                setError({
                    msg:data.msg,
                    color:data.color
                })
                if(data.success){
                    e.target.reset()
                }
            })
          
           
        
        }else{
            //Password Does not match
            setError({
                username:username?'':'Give Your Name',
                email:email?'':'Give Your Email',
                password:'Password does not match',
                color:password?'success':'danger'
            })
        }
        console.log(e);
    }

    let showPassword=(e)=>{
        e.preventDefault()
        let pass=document.getElementById('password')
        if(open){
            setOpen(false)
            console.log(pass);
            pass.type='password'
        }else{
            setOpen(true)
            pass.type='text'
        }
        
    }


    let showPassword2=(e)=>{
        e.preventDefault()
          let conpass=document.getElementById('Conpassword')
            if(open2){
                setOpen2(false)
                console.log(e);
                conpass.type='password'
            }else{
                
            setOpen2(true)
            conpass.type='text'
            }
    }
    
    return {handleSubmit,showPassword,showPassword2,open,open2,error}
}

export default useForm;