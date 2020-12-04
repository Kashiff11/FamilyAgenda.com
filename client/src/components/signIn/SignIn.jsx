import './SignIn.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignIn(props) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="signin_form_container">
      <form
        className="signin_form"
        onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin(formData);
        }}>
        <div className="signin_form_fields">
          <span className="signIn-title">My Poetry Collection</span>
          <label htmlFor="username">
            <input
              type='text'
              className="signIn-username"
              name='username'
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <input
              type='password'
              className="signIn-password"
              name='password'
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <div>
            <button className="signin_submit_button">Submit</button>
            <Link to='register'><button className="signin_register_button">Register</button></Link>
          </div>
        </div>
      </form>
    </div>
  )
}