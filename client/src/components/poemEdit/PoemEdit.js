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
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleUpdate(id, editFormData)
      }}>
        <h4>Edit Poem</h4>
        <label>Title
          <input
            type="text"
            name="title"
            value={editFormData.title}
            onChange={handleChange}
          />
        </label>
        <label>Content
        <input
            type="text"
            name="content"
            value={editFormData.content}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}