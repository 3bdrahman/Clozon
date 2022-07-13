
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/checkout' element={<h1>Checkout!</h1>}></Route>
          <Route path='/login' element={<h1>Login!</h1>}></Route>
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
