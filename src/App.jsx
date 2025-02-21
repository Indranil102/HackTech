
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Components/login/Login';

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <>
    <Navbar />
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header user={user} />

        {/* Routes */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </main>
      </div>
    </Router>
    </>
    
  );
};



export default App
