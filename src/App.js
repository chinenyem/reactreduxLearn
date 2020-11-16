import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import PostsPage from "./pages/PostsPage"
import SinglePost from "./pages/SinglePost"
import {Navbar} from "./components/Navbar";

//Initialize Component
const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Route exact path="/post/:id" component={SinglePost}/>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default App

