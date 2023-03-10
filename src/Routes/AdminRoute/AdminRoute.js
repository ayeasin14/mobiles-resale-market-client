import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className='text-center my-60'>
            <p className='text-2xl text-primary'>Loading...</p>
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;