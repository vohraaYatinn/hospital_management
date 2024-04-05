import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doctorDetails, tokenJson, updateDoctor, updateToken } from './redux/reducers/functionalities.reducer';
import { useRouter } from './hooks/use-router';
import useAxios from './network/useAxios';
import { getDetailsFromToken, loginDoctor } from './urls/urls';

const CheckRefreshComponent = () => {
    useEffect(()=>{
      console.log("hello")
    },[])
    let token = useSelector(tokenJson);
    let doctor = useSelector(doctorDetails);
    const dispatch = useDispatch();
    const router = useRouter();
    let storedToken = localStorage.getItem('storedToken');

    const [getRefershDataResponse, getRefershDataError, getRefershDataLoading, getRefershDataFetch] = useAxios();
    useEffect(()=>{
        if (!(token || doctor) && storedToken) {
            getRefershDataFetch(getDetailsFromToken({
                "token":storedToken
            }))
        }
        else{
            router.push("/login")
        }
    },[])
    useEffect(()=>{
        if (getRefershDataResponse?.response == "success") {
            localStorage.setItem('storedToken', getRefershDataResponse?.token);
            dispatch(updateToken(getRefershDataResponse?.token))
            dispatch(updateDoctor(getRefershDataResponse?.doctor))
        }
        else if (getRefershDataResponse?.response == "failure"){
            router.push("/login")

        }
    },[getRefershDataResponse])
  return (
    <>
    </>
  );
};

export default CheckRefreshComponent;
