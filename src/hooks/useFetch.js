import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endPoint) => {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await axios.get(endPoint);
        setData(response.data);
    }

    useEffect(() => {
        try {
            fetchData();1;
        } catch (error) {
            alert(error);
        }
    },[]);

    return data;
};

export default useFetch;
