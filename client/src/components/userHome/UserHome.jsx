import React from 'react';
import { Link } from 'react-router-dom'
import './UserHome.css'

export default function UserHome(props) {
  return (
    <div>
      {
        props.poems.map(poem => (
        <div className="user_home_single_poem">
          <React.Fragment key={poem.id}>
            <p>{poem.title}</p>
            <p>{poem.content}</p>
            <Link to={`/home/poems/${poem.id}`}><button>Full Poem</button></Link>
            <button>Poet Profile</button>
            </React.Fragment>
        </div>
        ))
      } 
    </div>
  );
}