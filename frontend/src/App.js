import "./App.css";
import React from "react";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const user = useSelector((state) => state.authRedecer.authData);
  console.log("user = ", user);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home></Home>
      <Profile />
      <Auth /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="../auth" />}
          />
          <Route
            path="/auth"
            element={user ? <Navigate to="../home" /> : <Auth />}
          />
          <Route
            path="/profile/:id"
            element={user ? <Profile /> : <Navigate to="../auth" />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p style={{ textAlign: "center", fontSize: "100px" }}>
                  404 Not Found...!
                </p>
              </main>
            }
          />
          {/* <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
