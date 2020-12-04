import React from 'react';
import { Link } from 'react-router-dom'
import './UserHome.css'

export default function UserHome(props) {
  return (
    <div>
      {
        props.poems.map(poem => (
          <React.Fragment key={poem.id}>
            <p>{poem.title}</p>
            <p>{poem.content}</p>
            <Link to={`/poems/${poem.id}`}><button>Full Poem</button></Link>
            <button>Poet Profile</button>
          </React.Fragment>
        ))
      } 
    </div>
  );
}