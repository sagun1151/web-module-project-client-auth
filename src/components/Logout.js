import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "./axiosWithAuth";

const Logout = (props)=> {
    const { push } = useHistory();

    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(res => {
                localStorage.removeItem('token');
                push('/login');
            });
    }, []);

    return(<div><p>Logout</p></div>);
}

export default Logout;