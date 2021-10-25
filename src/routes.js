import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Submit from "./components/Submit/Submit";
import Profile from "./components/Profile/Profile";
import PostDetail from "./components/PostDetail/PostDetail";
import Login from "./components/Login/Login";

const ROUTES = [
    {
        path: "/",
        name: 'Home',
        exact: true,
        component: Home
    },
    {
        path: "/post/:postId",
        name: 'Post',
        component: PostDetail,
        routes: [
            {
            path: "/post/:postId/postComment",
            name: 'Comments',
            component: () => <h1>Post A Comment!</h1>
            },
        ],       
    },
    {
        path: "/submit",
        exact: true,
        key: "SUBMIT",
        component: Submit
    },
    {
        path: "/profile",
        exact: true,
        key: "PROFILE",
        component: Profile
    },
    {
        path: "/login",
        exact: true,
        key: "LOGIN",
        component: Login
    }
];

export default ROUTES;

function RouteWithSubRoutes(route) {
    return (
        <Route 
            path={route.path}
            render={props => ( <route.component {...props} routes={route.routes} /> )}
        />
    );
}

export function RenderRoutes({ routes }) {
    return (
        <Switch>
            
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />

        </Switch>
    );
}