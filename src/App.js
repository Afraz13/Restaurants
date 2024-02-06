import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import RestView from './pages/RestView'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/restaurent_view/:id' element={<RestView/>}/>
      
        
      </Routes>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;