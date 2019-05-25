import React from 'react';

const Header = ({isAuthenticated, logout, data, refreshToken}) => {
    return (
        <header>
            {
                isAuthenticated &&
                <>
                    <button onClick={logout}>Logout</button>
                    <button onClick={() => refreshToken(data)}>Refresh</button>
                </>
            }
        </header>
    );
};

export default Header;
