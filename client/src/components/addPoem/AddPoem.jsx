import Select from 'react-select'
import "./AddPoem.css"

export default function AddPoem(props) {

  return (
    <div>
      <Select options={ props.poets.map(poet => (<p>{poet.first_name}</p>))}/>
    </div>
  );
}

