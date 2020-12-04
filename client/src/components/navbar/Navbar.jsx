import './Navbar.css'
import { Link } from 'react-router-dom'
// import Lkdin from '../../images'

export default function Navbar(props) {
  
  const { currentUser } = props;

  return (
    <div className="navbarFullDiv">
      <span className="nav_bar_title">My<br/>Poetry<br/>Collection</span>
      {currentUser &&
        <>
          <span className="nav_bar_welcome">Welcome {currentUser.first_name}</span>
          <Link to='/poets/new'><span className="nav_bar_add_poet">+ Poet</span></Link>
          <Link to='/poems/new'><span className="nav_bar_add_poem">+ Poem</span></Link>
          <span onClick={props.handleLogout} className="nav_bar_logout">Log Out</span>
        </>
      }
      <div className="nav_bar_linkedin_logo" alt="linkedin logo">
        {/* <img src={Lkdin}/> */}
      </div>
      {/* <div className="nav_bar_copyrights">
        <span>&copy; K Khan</span><br/>
      </div> */}
    </div>
  )
}