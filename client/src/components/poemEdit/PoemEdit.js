import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './PoemEdit.css'

export default function PoemEdit(props) {

  const[editFormData, setEditFormData] = useState({
    title: '',
    content: ''
  })

  const { id } = useParams();

  useEffect(() => {
    const preFillForm = () => {
      const editPoem = props.poems.find(poem => poem.id === Number(id))
      setEditFormData({
        title: editPoem.title,
        content: editPoem.content,
      })
    }
    if (props.poems.length) {
      preFillForm();
    }
  }, [props.poems])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }



  return (
    <div className="poem_edit_container">
      <form className="poem_edit_form"
        onSubmit={(e) => {
        e.preventDefault();
        props.handleUpdate(id, editFormData)
      }}>
        <p className="edit_poem_title">Edit Poem</p>
        <label><p>Title</p>
          <input
            className="edit_poem_title_input"
            type="text"
            name="title"
            value={editFormData.title}
            onChange={handleChange}
          />
        </label>
        <label><p>Content</p>
          <textarea
            className="poem_edit_text_area"
            type="text"
            name="content"
            value={editFormData.content}
            onChange={handleChange}
          />
        </label>
        <button className="poem_edit_submit">Submit</button>
      </form>
    </div>
  );
}