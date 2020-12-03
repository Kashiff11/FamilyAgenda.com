import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  
  const { currentUser } = props;

  return (
    <div className="navbarFullDiv">
      {currentUser &&
        <>
          <p>Welcome, {currentUser.first_name} {currentUser.last_name}</p>
          <Link to='/poets'><button>+ Poet</button></Link>
          <Link to='/poems'><button>+ Poem</button></Link>
          <button onClick={props.handleLogout}>Log Out</button>
        </>
      }
    </div>
  )
}