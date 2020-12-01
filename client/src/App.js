import './App.css';
import SignInScreen from './screens/signInScreen/SignInScreen'
import Layout from './layouts/Layout';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout />
      <Route exact path="/">
        <SignInScreen/>
      </Route>
    </div>
  );
}

export default App;
