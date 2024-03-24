import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { clearRedux } from '../redux/reducers/functionalities.reducer';
import { useRouter } from '../hooks/use-router';

const Logout = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(()=>{
        localStorage.removeItem('storedToken');
        dispatch(clearRedux())
        router.push("/login")


    },[])
  return (
<></>
    )
}

export default Logout