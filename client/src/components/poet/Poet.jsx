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
    short_bio: '',
    user_id: null
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
    <div className="poet_single_poet">
       <div className="single_poet">
       <p className="single_poet_name">{poetData.first_name} {poetData.last_name}</p>
       <p className="single_poet_lifespan">{poetData.year_born} to {poetData.year_died}</p>
       <p className="single_poet_birthplace">Birthplace: {poetData.birthplace}</p>
         <p className="single_poet_shortbio">{poetData.short_bio}</p>
         {
          currentUser?.id === poetData.user_id &&
            <>
              <button onClick={() => props.handleDelete(poetData.id)}>Delete</button>
              <Link to={`/home/poets/${poetData.id}/edit`}><button>Edit</button></Link>
            </>
        }
      </div>
    </div>
  );
}

