import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'

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
        poem_title: showOnePoem.title,
        poem_content: showOnePoem.content,
      })
    }
    showOnePoem();
  }, [])
  
  return (
    <div>
      <h1>{poemData.title}</h1>
    </div>
  );
}