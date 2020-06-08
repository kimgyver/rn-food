import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        searchApi('pasta');
    }, []);

    const searchApi = async (searchTerm) => {
        console.log('searchApi is called')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'auckland'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong.')
        }
    }

    return [searchApi, results, errorMessage];
};