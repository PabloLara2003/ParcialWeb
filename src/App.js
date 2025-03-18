import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Login from "./components/Login";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Stores from "./components/Stores";
import Cart from "./components/Cart";
import messages from "./locales/messages"; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [locale, setLocale] = useState("en"); 

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <div>
          <select onChange={(e) => setLocale(e.target.value)} style={{ margin: "10px" }}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>

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
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
