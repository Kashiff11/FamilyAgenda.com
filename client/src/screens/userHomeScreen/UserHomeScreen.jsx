
import UserHome from '../../components/userHome/UserHome';
import { useState, useEffect } from 'react';
import { deleteOnePoem, getAllPoems, putOnePoem } from '../../services/poems';
import { getAllPoets } from '../../services/poets';
import './UserHomeScreen.css'
import { Route, Switch } from 'react-router-dom';
import PoemScreen from '../poem/PoemScreen';
import PoemEditScreen from '../poemEditScreen/PoemEditScreen';

export default function UserHomeScreen(props) {

  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const fetchPoems = async () => {
      const poemData = await getAllPoems();
      setPoems(poemData);
    }
    fetchPoems();
  }, [props.poems])

  const handleUpdate = async (id, poemData) => {
    const updatePoem = await putOnePoem(id, poemData);
    setPoems(prevState => prevState.map(poem => {
      return poem.id === Number(id) ? updatePoem : poem
    }))
    props.history.push(`/home/poems/${id}`)
  }

  const handleDelete = async (id) => {
    await deleteOnePoem(id);
    setPoems(prevState => prevState.filter(poem => poem.id !== id))
    props.history.push(`/home`)
  }

  return (
    <div>
      <Switch>
        <Route path="/home/poems/:id/edit"><PoemEditScreen currentUser={props.currentUser} poems={poems} handleUpdate={handleUpdate}/></Route>;
        <Route path="/home/poems/:id"><PoemScreen currentUser={props.currentUser} poems={poems} handleDelete={handleDelete}/></Route>; 
        <Route path="/home"><UserHome currentUser={props.currentUser} poems={poems} /></Route>
      </Switch>
    </div>
  )
}