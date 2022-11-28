import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoader, setAdminLoader]= useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://assignment-12-server-mdfaysal22.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
                setAdminLoader(false);
            })
        }
    },[email])

    return [isAdmin, isAdminLoader];
}


export default useAdmin;