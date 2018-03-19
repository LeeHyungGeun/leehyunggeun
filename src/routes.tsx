import * as React from 'react';
import {
    Route,
    // Link,
    Redirect,
    Switch
} from 'react-router-dom';
// import Main from './Containers/MainContainer';
import Me from './Containers/MeContainer';
import Resume from './Containers/ResumeContainer';
import Contact from './Containers/ContactContainer';
import ThankYou from './Components/Contact/ThankYou';
import variables from './styles/variables';

export default (
    <Switch>
        {/* <Route exact={true} path="/" component={Me} /> */}
        <Route 
            exact={true} 
            path="/" 
            render={(props: any) => {
                document.body.style.background = variables.background;
                props.menu = 'Me';
                return <Me {...props} />;
            }}
        />
        <Route 
            exact={true} 
            path="/Me" 
            render={(props: any) => {
                document.body.style.background = variables.background;
                props.menu = 'Me';
                return <Me {...props} />;
            }}
        />
        <Route 
            exact={true} 
            path="/Resume" 
            render={(props: any) => {
                document.body.style.background = '#f9f9f9';
                props.menu = 'Resume';
                return <Resume {...props} />;
            }}
        />
        <Route
            exact={true}
            path="/Contact"
            render={(props: any) => {
                document.body.style.background = '#f9f9f9';
                props.menu = 'Contact';
                return <Contact {...props} />;
            }}
        />
        <Route
            exact={true}
            path="/Contact/ThankYou"
            render={(props: any) => {
                document.body.style.background = '#f9f9f9';
                props.menu = 'Contact';
                return <ThankYou {...props} />;
            }}
        />
        <Redirect from="*" to="/" />
    </Switch>
);