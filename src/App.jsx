import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import Login from './Components/login/Login';
import Analytic from './page/Analytic/Analytic';
import Home from './page/Home/Home';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <div className=" bg-gray-100">
        {/* Conditionally render Navbar if not on the login page */}
        {window.location.pathname !== '/login' && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/analytic"
            element={
              <ProtectedRoute user={user}>
                <Analytic />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;