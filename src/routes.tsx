/* tslint:disable:no-use-before-declare */
import * as React from 'react';
import {
    Route,
    // Link,
    Redirect,
    Switch
} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import NotFoundContainer from './containers/NotFoundContainer';

export default (
    <Switch>
        <Route exact={true} path="/" component={HomeContainer} />
        <Route exact={true} path="/Home" component={HomeContainer} />
        <Route exact={true} path="/About" component={AboutContainer} />
        <Route exact={true} path="/NotFound" component={NotFoundContainer} />
        <Redirect from="*" to="/NotFound" />
    </Switch>
);