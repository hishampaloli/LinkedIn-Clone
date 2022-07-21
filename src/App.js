import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useEffect } from "react";
import { getUserAuth } from "./Actions/userActions";
import { useDispatch } from "react-redux";
import JoinNow from "./components/JoinNow/JoinNow";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/join" element={<JoinNow />} />

          <Route
            exact
            path="/home"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
