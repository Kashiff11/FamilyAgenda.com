import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import './SignInScreen.css'

function SignInScreen(props) {
  return (
    <div className="signin_screen_card_container">
      <SignIn handleLogin={props.handleLogin}/>
    </div>
  );
}

export default SignInScreen;