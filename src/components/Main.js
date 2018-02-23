import React from "react";
import axios from 'axios';
import "./Main.css";
import Navigation from "./Navigation";
import Movies from "./Movies";

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            genres: [],
            genre: {}
        }
    }

    componentDidMount() {
        axios.get('http://jarmodev:3011/movies')
            .then(response => {
                this.setState({movies: response.data.data})
            })
            .catch(error => console.log(error))
        axios.get('http://jarmodev:3011/genres')
            .then(response => {
                this.setState({genres: response.data.data})
                this.setState({genre: response.data.data[3]})
            })
            .catch(error => console.log(error))
    }

    onGenreChange = event => {
        axios.get('http://jarmodev:3011/movies?genre=' + event.target.value)
            .then(response => {
                this.setState({movies: response.data.data})
            })
            .catch(error => console.log(error))
        this.setState({ genre: event.target.value });
    }

    setGenres = genres => {
        this.setState({genres});
    }

    onChange = data => {
        this.setState({
            [data.type]: {
                ...this.state[data.type],
                value: data.value
            }
        });
    };

    render() {
        return (
            <section className="main">
                <Navigation onChange={this.onChange} onGenreChange={this.onGenreChange}
                            setGenres={this.setGenres} {...this.state} />
                <Movies
                    movies={this.state.movies}
                />
            </section>
        )
    }
}

export default Main;