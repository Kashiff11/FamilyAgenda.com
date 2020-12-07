import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getAllPoets } from '../../services/poets';
import './UserHome.css'

export default function UserHome(props) {

  const [poets, setPoets] = useState([])

  useEffect(() => {
    const fetchPoets = async () => {
      const poetData = await getAllPoets();
      setPoets(poetData);
    }
    fetchPoets();
  }, [])

  return (
    <div className="user_home_full_div">
      {
        props.poems.map(poem => (
        <div className="user_home_single_poem">
          <React.Fragment key={poem.id}>
            <span className="user_home_poem_title">{poem.title}</span><br/><br/>
            <span className="user_home_poem_content">{poem.content}</span><br /><br />
            <div className="user_home_buttons"> 
              <Link to={`/home/poems/${poem.id}`}><button>Full Poem</button></Link>
              <Link to={`/home/poems/poet/${poem.poet_id}`}><button>Poet Profile</button></Link>
            </div>
          </React.Fragment>
        </div>
        ))
      } 
    </div>
  );
}