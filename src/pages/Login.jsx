import { useEffect } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/home');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

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
