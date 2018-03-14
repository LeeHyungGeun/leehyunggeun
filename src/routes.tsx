import * as React from 'react';
import {
    Route,
    // Link,
    Redirect,
    Switch
} from 'react-router-dom';
// import Main from './Containers/MainContainer';
import Me from './Containers/MeContainer';

export default (
    <Switch>
        <Route exact={true} path="/" component={Me} />
        <Route exact={true} path="/Me" component={Me} />
        <Redirect from="*" to="/" />
    </Switch>
);