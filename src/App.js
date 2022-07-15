
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        {/* checkout */}
          <Route path='/checkout' element={<>
            <Header/>
            <Checkout/>
          </>}></Route>
            {/* Login */}
          <Route path='/login' element={
            <Login/>
          }></Route>
          {/* default: Homepage */}
          <Route path="/" element={<>
          <Header/>
          <Home/>
          </>}>
            
          </Route>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
