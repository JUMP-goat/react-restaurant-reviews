import {useState, useEffect} from 'react';
import * as api from './api';

export function useRestaurantSearch(name) {
    const [restaurants, setRestaurants] = useState([]);
    const [amountResults, setAmountResults] = useState();
    // const [searchParams, setSearchParams] = useState({term, location});
    const [searchParams, setSearchParams] = useState(name);
    // const [name, setName] = useState([]);

    useEffect(() => {
        setRestaurants([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/restaurants/name', searchParams);
                const resp = await rawData.json();
                setRestaurants(resp[0].restaurants);
                setAmountResults(resp.total);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [restaurants, amountResults, searchParams, setSearchParams];
}

export default useRestaurantSearch;