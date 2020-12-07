import Select from 'react-select'
import "./AddPoem.css"

export default function AddPoem(props) {

  return (
    <div>
      { props.poets.map(poet => (<p>{poet.first_name} {poet.last_name}</p>))}
    </div>
  );
}

