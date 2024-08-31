import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './components/Register/Register.tsx';
import Login from './components/Login/Login.tsx';
import WeatherForecastComponent from './components/WeatherForecastComponent/WeatherForecastComponent.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const IndexComponent = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={handleLoginClick} className="button">
          Login
        </button>
        <button onClick={handleRegisterClick} className="button">
          Registration
        </button>
      </div>

      <div className="form-container">
        {showLogin && <Login />}
        {showRegister && <Register />}
      </div>

      {!showLogin && !showRegister}
      <WeatherForecastComponent></WeatherForecastComponent>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <IndexComponent />
  </React.StrictMode>
);

