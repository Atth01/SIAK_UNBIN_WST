import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import waveImg from '../img/wave.png';
import bgImg from '../img/bg.svg';
import avatarImg from '../img/avatar.svg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    
    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }
    
    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }
    
    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });

    return () => {
      inputs.forEach(input => {
        input.removeEventListener("focus", addcl);
        input.removeEventListener("blur", remcl);
      });
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simple input validation
    if (!username || !password) {
      setError('Username dan password harus diisi');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // Important for cookies if you're using them
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login berhasil:', data);
        localStorage.setItem('access_token', data.access_token);
        // You might want to set up an axios interceptor here if you're using axios
        navigate('/dashboard');
      } else {
        setError(data.msg || 'Login gagal. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Terjadi kesalahan. Silakan coba lagi nanti.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Lupa Password diklik');
    // Implementasi logika "Lupa Password" di sini
    // Misalnya: navigate('/forgot-password');
  };

  return (
    <div className="login-page">
      <img className="wave" src={waveImg} alt="wave" />
      <div className="container">
        <div className="img">
          <img src={bgImg} alt="background" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={avatarImg} alt="avatar" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input 
                  type="text" 
                  className="input" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input 
                  type="password" 
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button 
              onClick={handleForgotPassword}
              className="forgot-password-link"
              style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
            >
              Forgot Password?
            </button>
            <input 
              type="submit" 
              className="btn" 
              value={isLoading ? "Logging in..." : "Login"} 
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;