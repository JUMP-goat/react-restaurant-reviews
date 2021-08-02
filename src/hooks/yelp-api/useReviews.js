import {useState, useEffect} from 'react';
import * as api from './api';

export function useReviews(term, location) {
    const [reviews, setReviews] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location});

    useEffect(() => {
        setReviews([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/users/', searchParams);
                const resp = await rawData.json();
                setReviews(resp.reviews);
                setAmountResults(resp.total);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [reviews, amountResults, searchParams, setSearchParams];
}