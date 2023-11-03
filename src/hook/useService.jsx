import { useEffect, useState } from "react";


const useService = () => {
    const [service,setServices] = useState([])
    useEffect(()=>{
      fetch("https://cat-doctor-server-side.vercel.app/services")
      .then(res => res.json())
      .then(data =>{
           setServices(data)
      })
    },[])

    return service
};

export default useService;