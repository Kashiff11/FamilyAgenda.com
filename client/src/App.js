import './App.css';
import { useState } from 'react';
import SignInScreen from './screens/signInScreen/SignInScreen';
import Layout from './layouts/Layout';
import { Switch, Route } from 'react-router-dom';
import { loginUser } from './services/auth';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
  }

  return (
    <div className="App">
      <Layout />
      <Switch>
        <Route exact path="/register"><h3>Register</h3></Route>
        <Route exact path="/"><SignInScreen/></Route>;
      </Switch> 
    </div>
  );
}

export default App;
