import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/Header";
import Main from "./components/Main";
import Movie from "./components/Movie";
import Settings from "./components/Settings";
import NotFound from "./NotFound";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path="/movie/:movieId" component={Movie} />
                    <Route path="/settings" component={Settings} />
                    <Route component={NotFound} />
                </ Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
