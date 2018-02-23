import React from "react";
import "./Navigation.css";
import Selection from "./Selection";

class Navigation extends React.Component {
    render() {
        const { genre, genres, onGenreChange } = this.props;
        return (
            <section className="navigation">
                <Selection
                    genre={genre}
                    genres={genres}
                    onGenreChange={onGenreChange}
                />
            </section>
        )
    }
}

export default Navigation;