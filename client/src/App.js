import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Navbar from './components/navbar/Navbar';
import SignInScreen from './screens/signInScreen/SignInScreen';
import RegisterScreen from './screens/registerScreen/RegisterScreen';
import './App.css';
import UserHomeScreen from './screens/userHomeScreen/UserHomeScreen';
import AddPoetScreen from './screens/addPoetScreen/AddPoetScreen';
import AddPoemScreen from './screens/addPoemScreen/AddPoemScreen';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
      if (!userData) {
        history.push('/');
      }
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/home');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/home');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  return (
    <div className="App">
      <div className='appContainer'>
        <Switch>
          <Route exact path="/poets"><AddPoetScreen currentUser={currentUser} /></Route>;
          <Route exact path="/poems"><AddPoemScreen currentUser={currentUser}/></Route>;
          <Route exact path="/home"><UserHomeScreen currentUser={currentUser}/></Route>;
          <Route exact path="/register"><RegisterScreen handleRegister={handleRegister}/></Route>;
          <Route exact path="/"><SignInScreen handleLogin={handleLogin} /></Route>;
        </Switch>
      </div>
      <Navbar
        className='appNavbar'
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default App;

