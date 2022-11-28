import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Shared/Loading/Loading';
import { userAuth } from '../Contexts/AuthContext';

const SellerOrBuyer = ({children}) => {
    const {user, loader} = useContext(userAuth);
    const location = useLocation();
    if(loader){
        return (
            <Loading></Loading>
        )
    }
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default SellerOrBuyer;