import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/Header";
import Main from "./components/Main";
import Movie from "./components/Movie";
import NotFound from "./NotFound";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path="/movie/:movieId" component={Movie} />
                    <Route component={NotFound} />
                </ Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
