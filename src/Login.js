import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import {auth, provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = (e) => {
    auth.signInWithPopup(provider).then(result => {
      console.log(result);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    })
    .catch(error =>{
      alert(error.message);
    });
  }
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://www.slashgear.com/wp-content/uploads/2021/01/slack-logo.jpg' alt=''></img>
            <h1>Sign in to Slack-clone</h1>
            <p>shubhgarg.slack.clone.com</p>
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>
    </div>
  )
}

export default Login