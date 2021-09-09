import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductInfo from './components/ProductInfo';
import Carousel from './components/Carousel.js'
import NavBar from './components/NavBar';
<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'/>

function App() {
  return (
   <>
  <NavBar />
  <Carousel />
   <ProductInfo/>
   </>
  );
}

export default App;
