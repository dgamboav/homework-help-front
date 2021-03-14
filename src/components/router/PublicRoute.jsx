import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

const PublicRoute = ({ 
    isAuth,
    component: Component,
    layout: Layout,
    ...rest
}) => {
    return ( 
        <Route { ...rest } 
            component={ (props) => (
                ( !isAuth ) 
                    ? 
                    (
                        <Layout>
                            <Component {...props} /> 
                        </Layout>
                    )
                    : 
                    ( <Redirect to="/" /> )
            )}
        />
     );
}

PublicRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    layout: PropTypes.func.isRequired,
    component: PropTypes.func.isRequired
}
 
export default PublicRoute;