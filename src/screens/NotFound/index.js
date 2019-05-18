import React from 'react';

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
