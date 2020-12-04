import React from 'react';
import Poem from '../../components/poem/Poem';

export default function PoemScreen(props) {
  return (
    <div>
      <Poem poems={props.poems} currentUser={props.currentUser}/>
    </div>
  );
}