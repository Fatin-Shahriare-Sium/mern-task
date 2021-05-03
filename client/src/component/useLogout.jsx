

const { useHistory } = require("react-router")

let useLogout=()=>{

    let history=useHistory()
    function handleLogout(){
        localStorage.removeItem('__toketasjy42562627')
        history.push('/login')
    }
    return {handleLogout}
}
export default useLogout;