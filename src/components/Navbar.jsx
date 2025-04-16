// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">My App</div>
        <div className="space-x-4">
          {user && (
            <>
              <Link to="/home" className="text-white">Home</Link>
              <Link to="/registered" className="text-white">Registered</Link>
              <Link to="/potentials" className="text-white">Potentials</Link>
              <Link to="/myteam" className="text-white">MyTeam</Link>
              <button onClick={handleLogout} className="text-white">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
