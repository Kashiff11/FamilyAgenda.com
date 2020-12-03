
import UserHome from '../../components/userHome/UserHome';
import { useState, useEffect } from 'react';
import { getAllPoems } from '../../services/poems';
import './UserHomeScreen.css'

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
      <UserHome currentUser={props.currentUser} poems={poems}/>
    </div>
  )
}