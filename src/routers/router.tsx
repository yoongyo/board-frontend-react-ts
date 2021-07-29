import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from '../pages/notFound';
import PostList from '../pages/postList';
import PostDetail from '../pages/postDetail';
import PostCreate from '../pages/postCreate';



export const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={PostList}/>
                <Route path="/create" exact component={PostCreate}/>
                <Route path="/:post_id/" exact component={PostDetail}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}