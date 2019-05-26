import React from 'react';

const Header = ({isAuthenticated, logout, tokenData, expiryDate, refreshToken}) => {
    return (
        <header>
            {
                isAuthenticated &&
                <>
                    <button onClick={logout}>Logout</button>
                    <button onClick={() => refreshToken(tokenData, expiryDate)}>Refresh</button>
                </>
            }
        </header>
    );
};

export default Header;
