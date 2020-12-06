import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import { getOnePoet } from '../../services/poets';

import "./Poet.css"

 export default function Poet(props) {
  
  const [poetData, setPoetData] = useState({
    first_name: '',
    last_name: '',
    year_born: null,
    year_died: null,
    birthplace: '',
    short_bio: ''
  }) 
  
  const { id } = useParams();
   const { currentUser } = props;
   
   useEffect(() => {
    const fetchOnePoet = async () => {
      const poetData = await getOnePoet(id);
      setPoetData(poetData);
    }
    fetchOnePoet(id);
  }, [])
   
   return (
    <div className="poet_container">
       <h1>{poetData.first_name}</h1>


    </div>
  );
}

