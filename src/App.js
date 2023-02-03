import Login from './components/Login';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from './components/Home';
import AddUpdate from './components/AddUpdate';
import View from './components/View';
import { useSelector } from "react-redux";

function App() {
  const islogin =useSelector((state) => state.islogin);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={islogin?<Home />: <Navigate to="/login" />} />
          <Route exact path="/add" element={islogin?<AddUpdate />: <Navigate to="/login" />} />
          <Route exact path="/view/:id" element={islogin?<View />: <Navigate to="/login" />} />
          <Route exact path="/update/:id" element={islogin?<AddUpdate />: <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
