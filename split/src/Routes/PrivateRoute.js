import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Componenet, ...rest }) => {
    return (
        <Route>
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Componenet {...props} />
                } else {
                    return <Redirect to='/' />
                }
            }}
        </Route>
    )
}

export default PrivateRoute;