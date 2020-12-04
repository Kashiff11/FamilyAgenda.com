import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import AddPoet from '../../components/addPoet/AddPoet';
import { getAllPoets, postOnePoet } from '../../services/poets';

export default function AddPoetScreen(props) {

  const [poets, setPoets] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPoets = async () => {
      const poetData = await getAllPoets();
      setPoets(poetData);
    }
    fetchPoets();
  }, [])

  const handleCreatePoet = async (poetData) => {
    const newPoet = await postOnePoet(poetData);
    setPoets(prevState => [...prevState, newPoet])
    history.push('/home')
  }
  return (
    <div>
      <AddPoet handleCreatePoet={handleCreatePoet}/>
    </div>
  );
}
