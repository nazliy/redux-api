
import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import Detail from './pages/Detail';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
 
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
