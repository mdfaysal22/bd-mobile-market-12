import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useBuyer from '../Components/Hooks/useBuyer';
import Loading from '../Components/Shared/Loading/Loading';
import { userAuth } from '../Contexts/AuthContext';

const BuyerPrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loader} = useContext(userAuth);
    const [isBuyer,isBuyerLoader] = useBuyer(user?.email);
    if(loader || isBuyerLoader){
        return (
            <Loading></Loading>
        );
    }
    if(user?.email && isBuyer){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default BuyerPrivateRoute;