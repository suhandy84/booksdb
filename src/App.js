// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/detail/:idauthor' exact component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
