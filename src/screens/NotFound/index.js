import React from 'react';
import PropTypes from 'prop-types';

export default function NoMatch({location}) {
    return (
        <section>
            <h1 className='color-error'>404 - Not Found</h1>
            <h5>
                No match for <code>{location.pathname}</code>
            </h5>
        </section>
    );
}

NoMatch.propTypes = {
  location: PropTypes.object.isRequired
};
