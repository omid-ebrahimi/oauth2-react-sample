import React from 'react';

const Header = ({logout}) => {
    return (
        <header>
            <button onClick={logout}>Logout</button>
        </header>
    );
};

export default Header;
