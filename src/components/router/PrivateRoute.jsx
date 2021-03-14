import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

const PrivateRoute = ({ 
    isAuth,
    component: Component,
    layout: Layout,
    ...rest
}) => {
    return ( 
        <Route { ...rest } 
            component={ (props) => (
                ( isAuth ) 
                    ? 
                    (
                        <Layout>
                            <Component {...props} /> 
                        </Layout>
                    )
                    : 
                    ( <Redirect to="/login" /> )
            )}
        />
     );
}

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    layout: PropTypes.func.isRequired,
    component: PropTypes.func.isRequired
}
 
export default PrivateRoute;