import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login'>
            <div>
                <h2>Create Account</h2>
                <form action="" onSubmit=''>
                    <input type="email" name="" placeholder='Yout Email' id="" /><br />
                    <input type="password" name="" placeholder='your password' id="" /><br />
                    <input type="password" name="" placeholder='re-enter your password' id="" /><br />
                    <input className='btn primary'  type="submit" value="Submit" />
                </form>

                <p>Already have an account? <Link to="/signin">Log In your account</Link></p>
            </div>
        </div>
    );
};

export default Register;