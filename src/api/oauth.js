import ClientOAuth2 from 'client-oauth2';

export const oauth = new ClientOAuth2({
    clientId: 'my-trusted-client',
    clientSecret: 'secret',
    accessTokenUri: 'http://192.168.1.59:4411/oauth/token'
});

const calculateExpiresIn = (expiryDate) => (expiryDate.getTime() - new Date().getTime()) / 1000;

export const createToken = (tokenData, expiryDate) => {
    tokenData.expires_in = calculateExpiresIn(expiryDate);

    return oauth.createToken(tokenData)
};
