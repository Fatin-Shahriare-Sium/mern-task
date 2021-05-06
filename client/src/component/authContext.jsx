import React,{ useContext, useState } from "react"
export let AuthContext=React.createContext()

export let useAuthencation=()=>{
   return useContext(AuthContext)
    
}

export function AuthProvider({children}){
    let cookie=localStorage.getItem('__toketasjy42562627')
    let[auth,setAuth]=useState(cookie?true:false)

   console.log('react context call');

    return(
        <AuthContext.Provider value={{auth}}>
            {children}
        </AuthContext.Provider>
    )
}