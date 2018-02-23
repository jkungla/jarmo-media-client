import React from "react";

const Selection = ({genre, genres, onGenreChange }) => (
    <div className="selection">
        <label>Genre</label>
        <select value={genre.id} onChange={onGenreChange}>
            <option value={0} key={0}>All</option>
            { genres.map( genre => (
                <option value={genre.id} key={genre.id}>{genre.attributes.name}</option>
            ))}
        </select>
    </div>
);

export default Selection;