import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header';
import About from './components/About';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Header></Header>
      <Outlet></Outlet>

     
    </div>   
   
  );
}

export default App;
