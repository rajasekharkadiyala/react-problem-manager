import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import AllProblems from './components/problem/AllProblems';
import ProblemPage from './components/problem/ProblemPage';
import HomePage from './components/home/HomePage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="problems" component={AllProblems}/>
        <Route path="problem" component={ProblemPage}/>
        <Route path="problem/:id" component={ProblemPage}/>
    </Route>
);