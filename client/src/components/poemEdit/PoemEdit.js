import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './PoemEdit.css'

export default function PoemEdit(props) {

  const[editFormData, setEditFormData] = useState({
    poem_title: '',
    poem_content: ''
  })

  const { id } = useParams();

  useEffect(() => {
    const preFillForm = () => {
      const editPoem = props.poems.find(poem => poem.id === Number(id))
      setEditFormData({
        poem_title: editPoem.title,
        poem_content: editPoem.content,
      })
    }
    if (props.poems.length) {
      preFillForm();
    }
  }, [props.poems])



  return (
    <div>
      <h1>Hello Edit Page</h1>
    </div>
  );
}