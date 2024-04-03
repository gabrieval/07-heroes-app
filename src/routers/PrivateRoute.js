import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
 
    ...rest
}) => {
    const location = useLocation();
    
    console.log(location.pathname);
    localStorage.setItem('lastPath', location.pathname);  
 
    return isAuthenticated ? <Outlet {...rest} /> : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    // location: PropTypes.object.isRequired,  // Asegúrate de declarar 'location' como una prop requerida
}
