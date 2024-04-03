import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    ...rest
}) => {
 
    return !isAuthenticated ? <Outlet {...rest} /> : <Navigate to="/" />;
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}
