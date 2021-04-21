import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Link to='/signup'>
            <button>Sign Up</button>
            </Link>
            <Link to='/login'>
            <button>Login</button>
            </Link>
        </div>
    )
}

export default Home;
