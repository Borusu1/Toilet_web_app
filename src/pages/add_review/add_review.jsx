import React, { useState, useEffect } from 'react';
import axios from 'axios';

const addReview = () => {
    const [textReview, setReviewText] = useState('');
    const [rating, setRating] = useState('');
    const [markerID, setMarkerID] = useState('');

    const handleReviewChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleMarkerIDChange = (event) => {
        setMarkerID(event.target.value);
    };

    const addMarker = (event) => {
        const authorization = 'Bearer ' + window.localStorage.getItem('jsonwebtoken')

        let data = JSON.stringify({
            "review": textReview,
            "rating": rating,
            "markerId": markerID,
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/api/v1/review/addReview',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <input
                type="text"
                value={textReview}
                onChange={handleReviewChange}
                placeholder="Введіть відгук..."
            />
            <input
                type="text"
                value={rating}
                onChange={handleRatingChange}
                placeholder="Введіть рейтинг..."
            />
            <input
                type="text"
                value={markerID}
                onChange={handleMarkerIDChange}
                placeholder="Введіть мітку..."
            />
            <button onClick={addMarker}>Send review</button>
        </>
    );
};

export default addReview;
