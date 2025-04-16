import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // make sure this is your configured firebase file
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registered" element={<div>Registered Page</div>} />
        <Route path="/potentials" element={<div>Potentials Page</div>} />
        <Route path="/myteam" element={<div>My Team Page</div>} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/*"
          element={user ? <Layout /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
