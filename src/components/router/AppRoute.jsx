import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';

const AppRoute = ({ 
  child: Component, 
  layout: Layout ,  
  ...rest 
}) => {
  return(
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props}/>
        </Layout>
      )}
    />
  )
}

AppRoute.propTypes = {
  child: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired
}

export default AppRoute