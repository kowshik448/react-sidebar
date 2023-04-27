
import './App.css';
import Sidebar from './components/Sidebar';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
// import {Switch } from 'react-router';
import OverView from './pages/overView';
import Reports from './pages/Reports';
import products from './pages/products';
import Products from './pages/products';

function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route exact path='/overview' Component={OverView}/>
          <Route  path='/reports' Component={Reports}/>
          <Route  path='/products' Component={Products}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
