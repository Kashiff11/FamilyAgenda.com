import React from 'react';
import PoemEdit from '../../components/poemEdit/PoemEdit';

export default function PoemEditScreen(props) {
  return (
    <div>
      <PoemEdit poems={props.poems}/>
    </div>
  );
}
