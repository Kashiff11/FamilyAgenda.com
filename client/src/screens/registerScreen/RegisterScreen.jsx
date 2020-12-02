import React from 'react';
import Register from '../../components/register/Register';
import './RegisterScreen.css'

function RegisterScreen(props) {
  return (
    <div>
      <Register handleRegister={props.handleRegister}/>
    </div>
  );
}

export default RegisterScreen;