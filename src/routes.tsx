import * as React from 'react';
import {
    Route,
    // Link,
    Redirect,
    Switch
} from 'react-router-dom';
import Main from './Containers/MainContainer';

export default (
    <Switch>
        <Route exact={true} path="/" component={Main} />
        <Redirect from="*" to="/" />
    </Switch>
);