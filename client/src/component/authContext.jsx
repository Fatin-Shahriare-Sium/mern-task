import React,{ useContext, useEffect, useState } from "react"
export let AuthContext=React.createContext()

export let useAuthencation=()=>{
   return useContext(AuthContext)
    
}

export function AuthProvider({children}){
    let[auth,setAuth]=useState({authed:false,user:''})
    let[loading,setLoading]=useState(true)
    console.log(children);
    let cookie=localStorage.getItem('__toketasjy42562627')
    useEffect(()=>{
      return  fetch('/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                haveCookie:cookie?true:false,
                isAuthenticated:cookie,

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            setLoading(false)
        })
    },[])
    return(
        <AuthContext.Provider value={auth}>
            {!loading&&children}
        </AuthContext.Provider>
    )
}