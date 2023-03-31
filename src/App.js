import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Posts from './Pages/Posts';
import Navbar from './Components/Navabr';

function App() {
  return (
   
   <>
   <Router> 
    <Navbar/>
    <Routes>
      <Route path='/' element={<Posts/>}></Route>
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
