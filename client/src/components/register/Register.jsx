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
        <form
          className="register_form"
          onSubmit={(e) => {
            e.preventDefault();
            props.handleRegister(formData);
          }}>
          <span className="register_title">Registration Page</span>
          <label htmlFor="First Name"><span className="register_labels">First Name</span>
            <input
              type='text'
              className="register_inputs"
              name='first_name'
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Last Name"><span className="register_labels">Last Name</span>
            <input
              type='text'
              className="register_inputs"
              name='last_name'
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="date-of-birth"><span className="register_labels">Date of Birth</span>
            <input
              type='date'
              className="register_inputs"
              name='date_of_birth'
              value={formData.date_of_birth}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email"><span className="register_labels">Email</span>
            <input
              type='email'
              className="register_inputs"
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone-number"><span className="register_labels">Phone Number</span>
            <input
              type='tel'
              className="register_inputs"
              name='phone_number'
              placeholder="xxx-xxx-xxxx"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="username"><span className="register_labels">Username</span>
            <input
              type='text'
              className="register_inputs"
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password"><span className="register_labels">Password</span>
            <input
              type='password'
              className="register_inputs"
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <div>
            <button className="register_submit_button">Submit</button>
            <button className="register_reset_button" type="reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}