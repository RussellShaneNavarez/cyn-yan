// src/pages/Login.js
import { useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="p-6">
      <h1>Please Login</h1>
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
