import './App.css';
import ProductInfo from './components/ProductInfo';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter className="App">

    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/ProductInfo" component={ProductInfo}/> */}
      
      <Route exact path='/ProductInfo/:id' component={ProductInfo}/> 

    </Switch>
  </BrowserRouter>

  );
}

export default App;
