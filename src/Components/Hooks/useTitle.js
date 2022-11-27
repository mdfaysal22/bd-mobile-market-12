import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} -BD Mobile Market`;
    },[title])
}

export default useTitle;