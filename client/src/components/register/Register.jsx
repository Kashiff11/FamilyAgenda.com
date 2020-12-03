import './Register.css'
import { useState } from 'react';

export default function Register(props) {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    email: '',
    phone_number: '',
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='register_div'>
      <div className='register_interior_div'>
      <h2 className="register-title">Register</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
        }}>
        <label htmlFor="First Name">First Name
          <input
            type='text'
            className="registerFirstName"
            name='first_name'
            value={formData.first_name}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label htmlFor="Last Name">Last Name
          <input
            type='text'
            className="registerLastName"
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label htmlFor="date-of-birth">Date of Birth
          <input
            type='date'
            className="registerDOB"
            name='date_of_birth'
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label htmlFor="email">Email
          <input
            type='email'
            className="registerEmail"
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="phone-number">Phone Number
          <input
            type='tel'
            className="registerPhone"
            name='phone_number'
            placeholder="xxx-xxx-xxxx"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="username">Username
          <input
            type='text'
            className="registerUsername"
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">Password
          <input
            type='password'
            className="registerPassword"
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br/>
        <button>Submit</button>
      </form>
      </div>
    </div>
  )
}