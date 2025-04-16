import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Set loading to false once the auth state is known
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while auth state is being fetched
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="p-6">
      <h1>Welcome to Home, {user.displayName}</h1>
    </div>
  );
};

export default Home;
