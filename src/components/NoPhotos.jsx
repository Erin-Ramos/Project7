import React from 'react';

// if no results, display this page
const NoPhotos = () => (
  <li className='not-found'>
    <h3>No Results Found</h3>
    <p>Your search did not return any results. Please try a new search.</p>
  </li>
);

export default NoPhotos;