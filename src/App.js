
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/checkout' element={<h1>Checkout!</h1>}></Route>
          <Route path='/login' element={<h1>Login!</h1>}></Route>
          <Route path="/" element={<h1>Hello World</h1>}></Route>
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
