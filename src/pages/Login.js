import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { validateEmail, validatePassword } from '../validation/ValidationUtils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from?.pathname + location.state?.from?.search || '/';

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      alert(
        'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    const storedName = localStorage.getItem('userName');
    if (email !== storedEmail || password !== storedPassword) {
      alert('Invalid email or password. Please try again.');
      return;
    }
    

    alert('Login successful!');
    localStorage.setItem('userToken', 'logged_in_user');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', storedName);
    navigate(redirectTo, { replace: true });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(newPassword)) {
      alert(
        'New password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert('New passwords do not match.');
      return;
    }

    alert('Password reset successful. Please log in with your new password.');
    setIsForgotPassword(false); 
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">{isForgotPassword ? 'Forgot Password' : 'Login'}</h3>
            </div>
            <div className="card-body">
              {!isForgotPassword ? (
                <>
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Login</button>
                  </form>
                  <p className="mt-3 text-center">
                    <button
                      className="btn btn-link"
                      onClick={() => setIsForgotPassword(true)}
                    >
                      Forgot Password?
                    </button>
                  </p>
                </>
              ) : (
                <>
                  <form onSubmit={handleForgotPassword}>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Confirm New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Reset Password</button>
                  </form>
                  <p className="mt-3 text-center">
                    <button
                      className="btn btn-link"
                      onClick={() => setIsForgotPassword(false)}
                    >
                      Back to Login
                    </button>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;