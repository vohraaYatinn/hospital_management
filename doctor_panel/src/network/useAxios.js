/* eslint-disable */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenJson } from "../redux/reducers/functionalities.reducer";
import { useRouter } from "../hooks/use-router";
import { updateToken } from '../redux/reducers/functionalities.reducer';


const useAxios = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const [controller, setController] = useState();
    let token = useSelector(tokenJson);
    useEffect(()=>{
        if(token == false){
            let storedToken = localStorage.getItem('storedToken');
            if (storedToken) {
                dispatch(updateToken(storedToken))
                token = storedToken
            }

        }
    },[token])
    const axiosFetch = async (configObj) => {

        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj;
        try {
            axiosInstance.defaults.headers['jwtToken'] = token;
            setLoading(true);
            const ctrl = new AbortController();
            setController(ctrl);
            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig
            });
            setResponse(res.data);
        } catch (err) {
            setError(err);
            if (err?.response?.status === 404) {
                setError(err);
            }
            if (err?.response?.status === 403) {
                router.push("/login")
            }
            else{
                setError(err);
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const check = controller && controller.abort()
        return () => check;
    }, [controller]);

    return [response, error, loading, axiosFetch, setError];
}

export default useAxios