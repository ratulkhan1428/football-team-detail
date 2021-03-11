import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
      <div>
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
