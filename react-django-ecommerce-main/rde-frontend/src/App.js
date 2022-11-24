import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Products from './pages/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/" exact>
            <Redirect to="/product-list"/>
          </Route>

          <Route path="/product-list">
            <NavBar />
            <Products />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
