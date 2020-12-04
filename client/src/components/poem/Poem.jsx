import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
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
      <h1>{poemData.poem_poet_id}</h1>
      <h1>{poemData.poem_user_id}</h1>

      {
        currentUser.id === poemData.poem_user_id ?
          <>
            <button>Delete</button>
            <button>Edit</button>
          </>
          :
          <h1>not you</h1>
      }
    </div>
  );
}