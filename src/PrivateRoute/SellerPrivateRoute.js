import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../Components/Hooks/useSeller';
import Loading from '../Components/Shared/Loading/Loading';
import { userAuth } from '../Contexts/AuthContext';

const SellerPrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loader} = useContext(userAuth);
    const [isSeller, isSellerLoader] = useSeller(user?.email);
    if(loader || isSellerLoader){
        return (
            <Loading></Loading>
        );
    }
    if(user?.email && isSeller){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default SellerPrivateRoute;