import React from 'react';
import './SginIn.css'
import { Link, useLocation,useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history=useHistory()
    const redirect_url=location.state?.from || '/shop';
    console.log('came form', location)

    const handelGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
            console.log(result.user);
            // setUser(result.usre)
        })
    }
    return (
        <div className='login'>
            <h2>Log In to ama-jon website</h2>
            <form onSubmit=''>
                <input type="email" name="" placeholder='your email' id="" /><br />
                <input type="password" name="" placeholder='your password' id="" /><br />
                <input className='btn primary   ' type="submit" value="Submit" />
            </form>
            <p>New to ama-jon?<Link to='/register'>Creater a account</Link></p>
            <div>-----------or---------</div>
            <button onClick={handelGoogleLogin} className='btn primary'>google sign in</button>
        </div>




    );
};

export default SignIn;