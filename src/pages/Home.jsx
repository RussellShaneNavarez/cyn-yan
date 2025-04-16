// src/pages/Home.js
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="p-6">
      <h1>Welcome to Home, {user.displayName}</h1>
    </div>
  );
};

export default Home;
