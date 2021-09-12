import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductInfo from './components/ProductInfo';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'/>


function App() {
  return (
    <BrowserRouter className="App">

    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/ProductInfo" component={ProductInfo}/>
    </Switch>
  </BrowserRouter>

  );
}

export default App;
