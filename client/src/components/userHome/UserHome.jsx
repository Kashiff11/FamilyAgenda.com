import React from 'react';
import './UserHome.css'

export default function UserHome(props) {
  return (
    <div>
      {
        props.poems.map(poem => (
          <>
            <h4 key={poem.id}>"{poem.title}"</h4>
            <h4 key={poem.id}>{poem.content}</h4>
          </>
        ))
      } 
    </div>
  );
}