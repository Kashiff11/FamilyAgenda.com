import { useState } from 'react';
import './AddPoet.css'

export default function AddPoet(props) {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    year_born: null,
    year_died: null,
    birthplace: '',
    short_bio: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  } 

  return (
    <div className="add_poet_form_div">
      <form
        className="add_poet_form"
        onSubmit={(e) => {
          e.preventDefault()
          props.handleCreatePoet(formData)
        }}
      >
        <label htmlFor="First Name">First Name
          <input
            type='text'
            className="add_poet_first_name"
            name='first_name'
            value={formData.first_name}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label htmlFor="Last Name">Last Name
          <input
            type='text'
            className="add_poet_last_name"
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label htmlFor="year-born-died">Year Born - Died
          <input
            type='integer'
            className="add_poet_year_born"
            name='year_born'
            value={formData.year_born}
            onChange={handleChange}
          />
          <input
            type='integer'
            className="add_poet_year_died"
            name='year_died'
            value={formData.year_died}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label htmlFor="birth-place">Birth Place
          <input
            type='text'
            className="add_poet_birthplace"
            name='birthplace'
            value={formData.birthplace}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="short-bio">Short Bio
          <input
            type='text'
            className="add_poet_short_bio"
            name='short_bio'
            value={formData.short_bio}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}