import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import './SignInScreen.css'

function SignInScreen(props) {
  return (
    <div>
      <SignIn handleLogin={props.handleLogin}/>
    </div>
  );
}

export default SignInScreen;