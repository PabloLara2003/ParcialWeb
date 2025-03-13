import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Stores from "./components/Stores";
import Cart from "./components/Cart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/menu"
          element={isAuthenticated ? <Menu /> : <Navigate to="/login" />}
        />
        <Route
          path="/stores"
          element={isAuthenticated ? <Stores /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={isAuthenticated ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
