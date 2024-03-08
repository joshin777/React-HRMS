

import React, { useState } from 'react';
import { createBrowserHistory } from 'history'; 
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === 'hr' && password === 'hrpassword') {
      navigate('/hr-dashboard');
    } else if (username === 'manager' && password === 'managerpassword') {
      navigate('/manager-dashboard');
    } else if (username === 'employee' && password === 'employeepassword') {
      navigate('/employee-dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container-fluid bg-light" style={{ height: '100vh' }}>
      <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body" style={{ backgroundColor: '#14c9e2' }}>
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label><b>Username</b></label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label><b>Password</b></label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div style={{ paddingTop: '10px' }}>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
