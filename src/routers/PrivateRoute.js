import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    ...rest
}) => {
 
    return isAuthenticated ? <Outlet {...rest} /> : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}
