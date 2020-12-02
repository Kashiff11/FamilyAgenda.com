import './App.css';
import { useState } from 'react';
import SignInScreen from './screens/signInScreen/SignInScreen';
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser } from './services/auth';
import Navbar from './components/navbar/Navbar';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/home');
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home"><h3>UserHome</h3></Route>;
        <Route exact path="/register"><h3>Register</h3></Route>;
        <Route exact path="/"><SignInScreen handleLogin={handleLogin} /></Route>;
      </Switch> 
    </div>
  );
}

export default App;
