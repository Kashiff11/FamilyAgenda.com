import './Navbar.css'

export default function Navbar(props) {
  
  const { currentUser } = props;

  return (
    <div className="navbarFullDiv">
      {currentUser ? <p>Welcome, {currentUser.first_name} {currentUser.last_name}</p> : <p>no</p>}
    </div>
  )
}