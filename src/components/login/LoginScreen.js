import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navigate = useNavigate();

  const  {dispatch} = useContext (AuthContext);

  const handleLogin = () => { 
    
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    
    dispatch ({
      type: types.login,
      payload: {
        name: 'Gabriela'
      }
    }); 
    navigate( lastPath );
    
  };
  


  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
