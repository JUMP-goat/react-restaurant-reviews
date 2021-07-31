import React from 'react';
import NavBar from '../NavBar/NavBar';
import SubNav from '../NavBar/SubNav/SubNav';
import PostsWithFetch from '../PostWithFetch/PostsWithFetch';

export function Search() {
    return (
        <div>
            <NavBar/>
            <SubNav/>
            <PostsWithFetch/>
        </div>
    );
};

export default Search;