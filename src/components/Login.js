import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username) {
      dispatch(login({ username }));
    }
  };

  return (
    <div className="login">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
