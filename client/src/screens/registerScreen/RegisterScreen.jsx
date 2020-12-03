import React from 'react';
import Register from '../../components/register/Register';
import './RegisterScreen.css'

function RegisterScreen(props) {
  return (
    <div register_screen_div>
      <Register className="register_card_container" handleRegister={props.handleRegister}/>
    </div>
  );
}

export default RegisterScreen;