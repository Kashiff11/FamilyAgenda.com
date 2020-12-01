import './SignIn.css'

export default function SignIn() {
  return (
    <div>
      <h2 className="signIn-title">My Poetry Collection</h2>
      <form>
        <input className="signIn-username" placeholder="Username"></input>
      </form>
    </div>
  )
}