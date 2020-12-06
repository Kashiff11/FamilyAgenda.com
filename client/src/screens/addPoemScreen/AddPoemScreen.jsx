import AddPoem from '../../components/addPoem/AddPoem';
import { useState, useEffect } from 'react';
import { getAllPoets } from '../../services/poets';
import './AddPoemScreen.css'


export default function AddPoemScreen(props) {

  const [poets, setPoets] = useState([]);

  useEffect(() => {
    const fetchPoets = async () => {
      const poetData = await getAllPoets();
      setPoets(poetData);
    }
    fetchPoets();
  }, [])

  return (
    <div className="poem_screen">
      <AddPoem poets={poets}/>
    </div>
  );
}

