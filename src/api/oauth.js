import ClientOAuth2 from 'client-oauth2';

// Private

const calculateExpiresIn = (expiryDate) => (expiryDate.getTime() - new Date().getTime()) / 1000;

// Public

const oauth = new ClientOAuth2({
    clientId: 'my-trusted-client',
    clientSecret: 'secret',
    accessTokenUri: 'http://192.168.1.59:4411/oauth/token'
});

const createToken = (tokenData, expiryDate) => {
    tokenData.expires_in = calculateExpiresIn(expiryDate);

    return oauth.createToken(tokenData)
};

const isAuthError = (e) => e.code === 'EAUTH';


export {oauth, createToken, isAuthError}
