import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import './Poem.css'

export default function Poem(props) {

  const [poemData, setPoemData] = useState({
    poem_title: '',
    poem_content: '',
  })

  const { id } = useParams();
  
  useEffect(() => {
    const showOnePoem = () => {
      const singlePoem = props.poems.find(poem => poem.id === Number(id));
      setPoemData({
        poem_title: singlePoem.title,
        poem_content: singlePoem.content,
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
    </div>
  );
}