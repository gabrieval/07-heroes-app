import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path='*' element={<PrivateRoute isAuthenticated={user.logged}/>}>
            <Route exact path='*' element={<DashboardRoutes/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

