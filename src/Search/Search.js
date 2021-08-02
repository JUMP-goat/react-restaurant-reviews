import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';
import { SearchResults } from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';
import {useRestaurantSearch} from '../hooks/yelp-api/useRestaurantSearch';

export function Search() {
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    // const locationParam = params.get('find_loc');
    // const [restaurant, amountResults, searchParams, performSearch] = useRestaurantSearch(term, locationParam);
    const [restaurant, amountResults, searchParams, performSearch] = useRestaurantSearch(term);

    // if (!term || !locationParam) {
    if (!term) {
        history.push('/');
    }

    function search(term, location) {
        const encodedTerm = encodeURI(term);
        // const encodedLocation = encodeURI(location);
        // history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        history.push(`/search?find_desc=${encodedTerm}`);
        // performSearch({term, location});
        performSearch({term});
    }

    return (
        <div>
            {/* <NavBar term={term} location={locationParam} search={search}/> */}
            <NavBar term={term} search={search}/>
            <SubNav/>
            <SearchResultsSummary term={searchParams.term}
                                //   location={searchParams.location}
                                  amountResults={amountResults}
                                  shownResults={restaurant ? restaurant.length : 0}
            />
            <SearchResults restaurants={restaurant}/>
        </div>
    );
}