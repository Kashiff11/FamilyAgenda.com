import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import './Poem.css'

export default function Poem(props) {

  const [poemData, setPoemData] = useState({
    poem_title: '',
    poem_content: '',
    poem_poet_id: null,
    poem_user_id: null,
    poem_id: null
  })

  const { id } = useParams();
  const { currentUser } = props;
  
  useEffect(() => {
    const showOnePoem = () => {
      const singlePoem = props.poems.find(poem => poem.id === Number(id));
      setPoemData({
        poem_title: singlePoem.title,
        poem_content: singlePoem.content,
        poem_poet_id: singlePoem.poet_id,
        poem_user_id: singlePoem.user_id,
        poem_id: singlePoem.id
      })
    }
    if (props.poems.length) {
      showOnePoem()
    }
  }, [])
  
  return (
    <div>
      <h1>{poemData.poem_title}</h1>
      <h1>{poemData.poem_content}</h1>

      {
        currentUser?.id === poemData.poem_user_id &&
          <>
          <button onClick={() => props.handleDelete(poemData.poem_id)}>Delete</button>
            <Link to={`/home/poems/${poemData.poem_id}/edit`}><button>Edit</button></Link>
          </>
      }
    </div>
  );
}