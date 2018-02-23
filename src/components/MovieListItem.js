import React from 'react';
import "./MovieListItem.css";
import { Link } from "react-router-dom";

const MovieListItem = ({ movie }) => {
    const { title, poster, year, db_vote_average } = movie.attributes;
    const imgUrl = `https://image.tmdb.org/t/p/w342/${poster}`;
    return (

        <li className="movie-item thumbnail">

            <figure className="snip1273">

                <img src={imgUrl} alt={title} />
                <figcaption>
                    <h1>{title}</h1>
                    <section className="movie-details">
                        <div className="movie-year">
                            <span className="title">Year</span>
                            <span>{year}</span>
                        </div>
                        <div className="movie-rating">
                            <span className="title">Rating</span>
                            <span>{db_vote_average}</span>
                        </div>
                    </section>
                    <div className="movie-btn">
                        <Link to={`/movie/${movie.id}`} ><span className="info" >Info</span> </Link>
                        <span className="play" >Play</span>
                    </div>

                </figcaption>
                <div className="thumbnail"></div>


            </figure>

        </li>
    );
};

export default MovieListItem;