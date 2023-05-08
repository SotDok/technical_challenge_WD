
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import PhoneList from './pages/PhoneList';
import PhoneDetails from './pages/PhoneDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/phones' element={<PhoneList />} />
        <Route path='/phones/:id' element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
