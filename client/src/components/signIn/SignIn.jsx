import './SignIn.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignIn() {

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
    <div>
      <h2 className="signIn-title">My Poetry Collection</h2>
      <form>
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
        <button>Submit</button>
        <Link to='register'><button>Register</button></Link>
      </form>
    </div>
  )
}