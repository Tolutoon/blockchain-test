import { Routes, Route} from 'react-router-dom';
import './App.css';
import Market from './pages/Market';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/market' element={<Market/>}/>
    </Routes>

  )
}

export default App
