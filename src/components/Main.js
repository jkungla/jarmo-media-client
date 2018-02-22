import React from "react";
import axios from 'axios';
import "./Main.css";
import Navigation from "./Navigation";
import Movies from "./Movies";

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('http://jarmodev:3011/movies')
            .then(response => {
                this.setState({movies: response.data.data})
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <section className="main">
                <Navigation />
                <Movies
                    movies={this.state.movies}
                />
            </section>
        )
    }
}

export default Main;