
import './App.css'
import Navbar from './Components/Navbar/Navbar'
<<<<<<< HEAD
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Components/login/Login';
=======
import Admin from './page/Admin/Admin'
>>>>>>> 7cc6481a11654feccdb94d2d45df78f57480b097

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <>
<<<<<<< HEAD
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
=======
      <Navbar />
      <Admin/>
>>>>>>> 7cc6481a11654feccdb94d2d45df78f57480b097
    </>
    
  );
};



export default App
