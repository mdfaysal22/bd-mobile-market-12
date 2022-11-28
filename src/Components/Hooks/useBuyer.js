const { useState, useEffect } = require("react")

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoader, setIsBuyerLoader] = useState(true);
    useEffect(() => {
        if(email){
            fetch(`https://assignment-12-server-mdfaysal22.vercel.app/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsBuyer(data.isBuyer)
                setIsBuyerLoader(false);
            })
        }
    },[email])

    return [isBuyer,isBuyerLoader];
}

export default useBuyer;