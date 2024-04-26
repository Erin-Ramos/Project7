import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoList = (props) => {
    const results = props.data;
    let photos;

    if (results.length > 0) {
        photos = results.map(photo => <Photo key={photo.id} photo={photo} />)
    } else {
        photos = <NoPhotos />
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );

}

export default PhotoList;