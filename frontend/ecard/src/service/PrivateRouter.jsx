import React, { Component } from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ element }) => {
    const token = localStorage.getItem('token');
    return token ? <Component {...element} /> : <Navigate to={'/login'} />
}

export default PrivateRouter;