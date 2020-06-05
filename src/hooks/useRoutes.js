import React from 'react';
import Nav from '../components/nav/Nav';
import Header from '../components/header/Header';
import Registration from '../components/registration/Registration';
import Results from '../components/results/Results';
import Checkup from '../components/checkup/Checkup';
import Login from '../components/login/Login';
import { Switch, Route, Redirect } from 'react-router-dom';

const routes = [
    {
        path: '/',
        exact: true,
        header: () => <Header />,
        nav: () => <Nav />,
        main: () => <Registration />,
    },
    {
        path: '/register',
        exact: true,
        header: () => <Header />,
        nav: () => <Nav />,
        main: () => <Registration />,
    },
    {
        path: '/results',
        exact: true,
        header: () => <Header />,
        nav: () => <Nav />,
        main: () => <Results />,
    },
    {
        path: '/checkup',
        exact: true,
        header: () => <Header />,
        nav: () => <Nav />,
        main: () => <Checkup />,
    },
    {
        path: '/checkup/:step',
        exact: true,
        header: () => <Header />,
        nav: () => <Nav />,
        main: () => <Checkup />,
    },
];
const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <>
                <Switch>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} exact={route.exact}>
                            {route.header}
                        </Route>
                    ))}
                </Switch>
                <div className="wrapper">
                    <Switch>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact}>
                                {route.nav}
                            </Route>
                        ))}
                    </Switch>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact}>
                                {route.main}
                            </Route>
                        ))}
                    </Switch>
                </div>
            </>
        );
    }
    return (
        <div className="wrapper">
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default useRoutes;
