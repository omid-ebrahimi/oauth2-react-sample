import React from 'react';

const Header = ({isAuthenticated, logout}) => {
    return (
        <header>
            {
                isAuthenticated && <button onClick={logout}>Logout</button>
            }
        </header>
    );
};

export default Header;
