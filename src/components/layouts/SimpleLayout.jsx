import React from 'react'
import PropTypes from 'prop-types';

const SimpleLayout = ({children}) => {
    return (
        <main>{children}</main>
    )
}

SimpleLayout.propTypes = {
    children: PropTypes.object.isRequired
}

export default SimpleLayout