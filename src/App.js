import "./App.css";
import Main from "./Pages/formPage/Main";
import background from "./assets/img/bgd.jpg";

import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Apicall from "./Pages/ApiPage/Apicall";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/signUp" element={<Main />} />
            <Route exact path="/apiCall" element={<Apicall />} />
            <Route path='*' element={<Navigate to='/signUp' />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
