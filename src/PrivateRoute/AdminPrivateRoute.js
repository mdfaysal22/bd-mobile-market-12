import React, { useContext } from 'react';
import useAdmin from '../Components/Hooks/useAdmin';
import Loading from '../Components/Shared/Loading/Loading';
import { userAuth } from '../Contexts/AuthContext';

const AdminPrivateRoute = ({children}) => {
    const {user, loader} = useContext(userAuth);
    const [isAdmin, isAdminLoader] = useAdmin(user?.email);
    if(loader || isAdminLoader){
        return <Loading></Loading>
    }
    if(user?.email && isAdmin){
        return children
    }
};

export default AdminPrivateRoute;