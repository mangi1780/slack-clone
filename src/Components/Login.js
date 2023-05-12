import { Button } from '@mui/material'
import React from 'react'
import './login.css'
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function Login() {
    const [{user},dispatch] = useStateValue();

    const signIn =()=>{
auth.signInWithPopup(provider).then(result => (dispatch({type:actionTypes.SET_USER, user :result?.user}))).catch(error=>alert(error.message))

    }
    return (
        <div className='login'>
            <div className='login_container' >
                <img src="https://i.pinimg.com/originals/9c/9f/bc/9c9fbc285815b4a7e28c9fe46e4a198c.jpg" />
                <h1> Welcome to Vibe</h1>
                <p>vibe.co.in</p>
                <Button onClick={signIn}>Sign in with Google</Button>

            </div>
        </div>
    )
}

export default Login