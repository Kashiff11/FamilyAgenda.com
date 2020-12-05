import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import './Poem.css'

export default function Poem(props) {

  const [poemData, setPoemData] = useState({
    poem_title: '',
    poem_content: '',
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
      })
    }
    if (props.poems.length) {
      showOnePoem()
    }
  }, [props.poems])
  
  return (
    <div>
      <h1>{poemData.poem_title}</h1>
      <h1>{poemData.poem_content}</h1>

      {
        currentUser.id === poemData.poem_user_id &&
          <>
            <button>Delete</button>
            <Link to="/home/poemsgit hui/:id/edit"><button>Edit</button></Link>
          </>
      }
    </div>
  );
}