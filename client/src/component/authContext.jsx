import React,{ useContext, useEffect, useState } from "react"
export let AuthContext=React.createContext()

export let useAuthencation=()=>{
   return useContext(AuthContext)
    
}

export function AuthProvider({children}){
    let[auth,setAuth]=useState(false)
    let[loading,setLoading]=useState(true)
   console.log('react context call');
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
            console.log('data in context',data);
            if(data.alreadyLogged){
                setAuth(true)
            }else{
                setAuth(false)
            }
            
            setLoading(false)

        })
    })
    return(
        <AuthContext.Provider value={{auth,loading,setAuth}}>
            {!loading&&children}
        </AuthContext.Provider>
    )
}