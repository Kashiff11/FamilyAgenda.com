
import UserHome from '../../components/userHome/UserHome';
import { useState, useEffect } from 'react';
import { getAllPoems } from '../../services/poems';
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
  }, [])

  return (
    <div>
      <Switch>
        <Route path="/home/poems/:id/edit"><PoemEditScreen currentUser={props.currentUser} poems={poems}/></Route>;
        <Route path="/home/poems/:id"><PoemScreen currentUser={props.currentUser} poems={poems} /></Route>; 
        <Route path="/home"><UserHome currentUser={props.currentUser} poems={poems} /></Route>
      </Switch>
    </div>
  )
}