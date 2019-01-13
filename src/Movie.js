import React, { Component } from 'react';
import './Movie.css';

function Movie({title, poster}) {
    return (
        <div>
            <img src={poster} alt="Movie Poster"></img>
            <h1>{title}</h1>
        </div>
    )
}

export default Movie